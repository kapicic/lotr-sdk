import {QueryObject} from "../types";
import {stringify} from "../utils";
import {BaseGetService} from "./base";

export class MovieService extends BaseGetService {
    private resourceUrl = 'movie';

    protected getResourceName(): string {
        return this.resourceUrl;
    }

    public async getQuotes(movieId: string, queryObject?: QueryObject): Promise<unknown> {
        const url = `${this.resourceUrl}/${movieId}/quote${queryObject ? `?${stringify(queryObject)}` : ''}`;

        return await this.client.get(url);
    }
}
