/// <reference path="./types/index.ts" />
import { Client } from './client';
import {BookService, MovieService, CharacterService, QuoteService, ChapterService} from './service';
import {ClientConfig, QueryObject} from './types';
import {Filter} from "./filter/filter";

/**
 * Decision explanation: simplify API or have 10+ methods thus violating SOLID:
 *
 * We could have exposed a fewer number of methods, by allowing for a string parameter which would represent
 * the targeted resource (e.g. 'book', 'chapter', 'movie') and based on the value call the appropriate
 * service and fetch the appropriate data.
 *
 * However, it is common for SDKs to have more methods than regular internally-used services, thus we are going
 * for the second option.
 */
export class Lotr {

    private readonly client: Client;

    private readonly bookService: BookService;

    private readonly movieService: MovieService;

    private readonly characterService: CharacterService;

    private readonly quoteService: QuoteService;

    private readonly chapterService: ChapterService;

    constructor(private apiKey?: string) {
        this.client = new Client(apiKey);
        this.bookService = new BookService(this.client);
        this.movieService = new MovieService(this.client);
        this.characterService = new CharacterService(this.client);
        this.quoteService = new QuoteService(this.client);
        this.chapterService = new ChapterService(this.client);
    }

    public config(config: ClientConfig) {
        this.client.init(config);
    }

    /**
     *  @param {QueryObject} queryObject - if omitted returns all books
     *  @param {Pagination} queryObject.pagination - object containing {page, limit, offset}
     *  @param {Sort} queryObject.sort - object containing {field, direction}
     *  @param {Search} queryObject.search - TODO
     */
    public async books(queryObject?: QueryObject) {
        return await this.bookService.getList(queryObject);
    }

    /**
     *  @param {string} id
     */
    public async book(id: string) {
        return await this.bookService.getById(id);
    }

    /**
     *  @param {string} bookId - id of the book
     *  @param {QueryObject} queryObject - TODO add explanation on how to use queryObject
     */
    public async bookChapters(bookId: string, queryObject?: QueryObject) {
        return await this.bookService.getChapters(bookId, queryObject);
    }

    /**
     *  @param {QueryObject} queryObject - if omitted returns all books
     *  @param {Pagination} queryObject.pagination - object containing {page, limit, offset}
     *  @param {Sort} queryObject.sort - object containing {field, direction}
     *  @param {Search} queryObject.search - TODO
     */
    public async movies(queryObject?: QueryObject) {
        return await this.movieService.getList(queryObject);
    }

    public async movie(id: string) {
        return this.movieService.getById(id);
    }

    public async movieQuotes(movieId: string, queryObject?: QueryObject) {
        return this.movieService.getQuotes(movieId, queryObject);
    }

    /**
     *  @param {QueryObject} queryObject - if omitted returns all books
     *  @param {Pagination} queryObject.pagination - object containing {page, limit, offset}
     *  @param {Sort} queryObject.sort - object containing {field, direction}
     *  @param {Search} queryObject.search - TODO
     */
    public async characters(queryObject?: QueryObject) {
        return await this.characterService.getList(queryObject);
    }

    public async character(id: string) {
        return this.characterService.getById(id);
    }

    public async characterQuotes(characterId: string, queryObject?: QueryObject) {
        return this.characterService.getCharacterQuotes(characterId, queryObject);
    }

    /**
     *  @param {QueryObject} queryObject - if omitted returns all books
     *  @param {Pagination} queryObject.pagination - object containing {page, limit, offset}
     *  @param {Sort} queryObject.sort - object containing {field, direction}
     *  @param {Search} queryObject.search - TODO
     */
    public async quotes(queryObject?: QueryObject) {
        return await this.quoteService.getList(queryObject);
    }

    public async quote(id: string) {
        return this.quoteService.getById(id);
    }

    /**
     *  @param {QueryObject} queryObject - if omitted returns all books
     *  @param {Pagination} queryObject.pagination - object containing {page, limit, offset}
     *  @param {Sort} queryObject.sort - object containing {field, direction}
     *  @param {Search} queryObject.search - TODO
     */
    public async chapters(queryObject?: QueryObject) {
        return await this.chapterService.getList(queryObject);
    }

    public async chapter(id: string) {
        return this.chapterService.getById(id);
    }

    public filter(field: string) {
        return new Filter(field);
    }
}
