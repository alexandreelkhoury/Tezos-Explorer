import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Model } from 'mongoose';
import { Accounts } from 'src/schemas/accounts.schema';
import { PageDto } from 'src/schemas/dto/page.dto';
import { PageMetaDto, PageOptionsDto } from 'src/schemas/dto/pageMeta.dto';
const axios = require('axios')

@Injectable()
export class AccountsService {
    constructor(
        @InjectModel(Accounts.name) private model: Model<Accounts>) {
        //this.addAccountsToDB()
    }

    async getAddresses(pageOptionsDto: PageOptionsDto) {

        var options: any = {}

        if (pageOptionsDto.address) {
            options.address = pageOptionsDto.address;
        }
        const entities = await this.model
            .find(options)
            .skip((pageOptionsDto.take || 10) * ((pageOptionsDto.page || 1) - 1))
            .limit(pageOptionsDto.take || 10)
            .sort(pageOptionsDto.sort)
            .exec();

        const itemCount = await this.model.count();

        const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });
        return new PageDto(entities, pageMetaDto);
    }

    async getAddress(address: string) {
        return await this.model.find({ "address": address }).exec();
    }

    @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
    async addAccountsToDB() {
        try {
            var i = 31750000;
            // 19600000 
            var x = 1;

            while (i > 1000000) {
                const response = await axios.get('https://api.tzkt.io/v1/accounts?limit=10000&type.ne=contract&balance.lt=' + i + '&sort.desc=balance');
                for (var account of response.data) {
                    i = account.balance;
                    console.log("Address n°: " + x + "   balance : " + i)
                    x++;
                    await this.model.findOneAndUpdate({ id: account.id }, account, { upsert: true }).exec();
                    i = account.balance;
                }
            }
            return;
        } catch (error) {
            console.error(error);
        }
    }
}


