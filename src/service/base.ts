import {Client} from "../client";
import {QueryObject} from "../types";
import {stringify} from "../utils";

export abstract class BaseGetService {

    protected abstract getResourceName(): string;

    constructor(protected client: Client) {
    }

    public async getById(id: string): Promise<unknown> {
        return await this.client.get(`${this.getResourceName()}/${id}`);
    }

    public async getList(queryObject?: QueryObject): Promise<unknown> {
        if (!queryObject) {
            return await this.client.get(this.getResourceName());
        }

        return await this.client.get(`${this.getResourceName()}?${stringify(queryObject)}`)
    }
}
