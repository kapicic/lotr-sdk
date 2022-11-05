import {QueryObject} from "../types";
import {stringify} from "../utils";
import {BaseGetService} from "./base";

export class CharacterService extends BaseGetService {
    private resourceUrl = 'character';

    protected getResourceName(): string {
        return this.resourceUrl;
    }

    public async getCharacterQuotes(characterId: string, queryObject?: QueryObject): Promise<unknown> {
        const url = `${this.resourceUrl}/${characterId}/quotes${queryObject ? `?${stringify(queryObject)}` : ''}`;

        return await this.client.get(url);
    }
}
