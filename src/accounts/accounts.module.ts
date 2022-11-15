import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Accounts, AccountsSchema } from 'src/schemas/accounts.schema';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';

@Module({
  controllers: [AccountsController],
  providers: [AccountsService],
  imports: [
    MongooseModule.forFeature([{ name: Accounts.name, schema: AccountsSchema }]),
  ],
})
export class AccountsModule { }
