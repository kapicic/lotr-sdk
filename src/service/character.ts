import {Client} from "../client";
import {QueryObject} from "../types";
import {stringify} from "../utils";

export class CharacterService {
    private resourceUrl = 'character';

    constructor(private client: Client) {
    }

    public async getById(id: string): Promise<unknown> {
        return await this.client.get(`${this.resourceUrl}/${id}`);
    }

    public async getCharacters(queryObject?: QueryObject): Promise<unknown> {
        if (!queryObject) {
            return await this.client.get(this.resourceUrl);
        }

        return await this.client.get(`${this.resourceUrl}?${stringify(queryObject)}`)
    }

    public async getCharacterQuotes(characterId: string, queryObject?: QueryObject): Promise<unknown> {
        const url = `${this.resourceUrl}/${characterId}/quotes${queryObject ? `?${stringify(queryObject)}` : ''}`;

        return await this.client.get(url);
    }
}
