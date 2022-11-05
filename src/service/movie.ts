import {Client} from "../client";
import {QueryObject} from "../types";
import {stringify} from "../utils";

export class MovieService {
    private resourceUrl = 'movie';

    constructor(private client: Client) {
    }

    public async getById(id: string): Promise<unknown> {
        return await this.client.get(`${this.resourceUrl}/${id}`);
    }

    public async getMovies(queryObject?: QueryObject): Promise<unknown> {
        if (!queryObject) {
            return await this.client.get(this.resourceUrl);
        }

        return await this.client.get(`${this.resourceUrl}?${stringify(queryObject)}`)
    }

    public async getQuotes(movieId: string, queryObject?: QueryObject): Promise<unknown> {
        const url = `${this.resourceUrl}/${movieId}/quote${queryObject ? `?${stringify(queryObject)}` : ''}`;

        return await this.client.get(url);
    }
}
