import { PageMetaDto } from './pagemeta.dto';

export class PageDto<T> {

    readonly data: T[];

    readonly meta: PageMetaDto;

    constructor(data: T[], meta: PageMetaDto) {
        this.data = data;
        this.meta = meta;
    }
}
