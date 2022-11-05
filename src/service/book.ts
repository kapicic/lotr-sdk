import {Client} from "../client";
import {QueryObject} from "../types/queryObject";
import {stringify} from "../utils";

export class BookService {

    private resourceUrl = 'book';

    constructor(private client: Client) {
    }

    public async getById(id: string): Promise<unknown> {
        return await this.client.get(`${this.resourceUrl}/${id}`);
    }

    public async getBooks(queryObject?: QueryObject): Promise<unknown> {
        if (!queryObject) {
            return await this.client.get(this.resourceUrl);
        }

        return await this.client.get(`${this.resourceUrl}?${stringify(queryObject)}`)
    }

    public async getChapters(bookId: string, queryObject?: QueryObject): Promise<unknown> {
        const url = `${this.resourceUrl}/${bookId}/chapter${queryObject ? `?${stringify(queryObject)}` : ''}`;

        return await this.client.get(url);
    }
}
