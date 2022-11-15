export enum Order {
    ASC = 'ASC',
    DESC = 'DESC',
}

export class PageOptionsDto {
    readonly order?: Order = Order.ASC;

    readonly page?: number = 1;

    readonly take?: number = 10;

    readonly search?: string = '';

    readonly address?: string;

    readonly balace?: number;

    readonly sort?: string;

    get skip(): number {
        return ((this.page || 0) - 1) * (this.take || 0);
    }
}

export interface PageMetaDtoParameters {
    pageOptionsDto: PageOptionsDto;
    itemCount: number;
}

export class PageMetaDto {
    readonly page: number;

    readonly take: number;

    readonly itemCount: number;

    readonly pageCount: number;

    readonly hasPreviousPage: boolean;

    readonly hasNextPage: boolean;

    constructor({ pageOptionsDto, itemCount }: PageMetaDtoParameters) {
        this.page = pageOptionsDto.page || 0;
        this.take = pageOptionsDto.take || 10;
        this.itemCount = itemCount;
        this.pageCount = Math.ceil(this.itemCount / this.take);
        this.hasPreviousPage = this.page > 1;
        this.hasNextPage = this.page < this.pageCount;
    }
}