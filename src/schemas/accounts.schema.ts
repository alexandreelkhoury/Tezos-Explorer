import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AccountsDocument = Accounts & Document;

@Schema({
    timestamps: true,
    toJSON: {
        getters: true,
        virtuals: true,
    }
})
export class Accounts {

    @Prop()
    id: number;
    @Prop()
    type: string;
    @Prop()
    address: string;
    @Prop()
    alias: string;
    @Prop()
    revealed: false;
    @Prop()
    balance: number;
    @Prop()
    rollupBonds: number;
    @Prop()
    counter: number;
    @Prop()
    numContracts: number;
    @Prop()
    rollupsCount: number;
    @Prop()
    activeTokensCount: 64;
    @Prop()
    tokenBalancesCount: 64;
    @Prop()
    tokenTransfersCount: 86;
    @Prop()
    numActivations: number;
    @Prop()
    numDelegations: number;
    @Prop()
    numOriginations: number;
    @Prop()
    numTransactions: number;
    @Prop()
    numReveals: number;
    @Prop()
    numRegisterConstants: number;
    @Prop()
    numSetDepositsLimits: number;
    @Prop()
    numMigrations: number;
    @Prop()
    txRollupOriginationCount: number;
    @Prop()
    txRollupSubmitBatchCount: number;
    @Prop()
    txRollupCommitCount: number;
    @Prop()
    txRollupReturnBondCount: number;
    @Prop()
    txRollupFinalizeCommitmentCount: number;
    @Prop()
    txRollupRemoveCommitmentCount: number;
    @Prop()
    txRollupRejectionCount: number;
    @Prop()
    txRollupDispatchTicketsCount: number;
    @Prop()
    transferTicketCount: number;
    @Prop()
    increasePaidStorageCount: number;
    @Prop()
    firstActivity: number;
    @Prop()
    firstActivityTime: Date;
    @Prop()
    lastActivity: number;
    @Prop()
    lastActivityTime: Date;
}

const AccountsSchema = SchemaFactory.createForClass(Accounts);

export { AccountsSchema };