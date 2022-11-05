import {QueryObject} from "../types";
import {stringify} from "../utils";
import {BaseGetService} from "./base";

export class BookService extends BaseGetService {

    private readonly resourceUrl = 'book';

    protected getResourceName(): string {
        return this.resourceUrl;
    }

    public async getChapters(bookId: string, queryObject?: QueryObject): Promise<unknown> {
        const url = `${this.resourceUrl}/${bookId}/chapter${queryObject ? `?${stringify(queryObject)}` : ''}`;

        return await this.client.get(url);
    }
}
