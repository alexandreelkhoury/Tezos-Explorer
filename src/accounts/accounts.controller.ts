import { Controller, Get, Param, Query } from '@nestjs/common';
import { PageOptionsDto } from 'src/schemas/dto/pageMeta.dto';
import { AccountsService } from './accounts.service';

@Controller('accounts')
export class AccountsController {
    constructor(private readonly accountsService: AccountsService) { }

    @Get('')
    async getAddresses(@Query() pageOptionsDto: PageOptionsDto) {
        return this.accountsService.getAddresses(pageOptionsDto);
    }

    @Get(':address')
    async getAddress(@Param('address') address: string) {
        return this.accountsService.getAddress(address);
    }
}
