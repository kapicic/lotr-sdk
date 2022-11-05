/// <reference path="./types/index.ts" />
import { Client } from './client';
import {BookService, MovieService, CharacterService} from './service';
import {QueryObject} from './types';

export class Lotr {

    private readonly client: Client;

    private readonly bookService: BookService;

    private readonly movieService: MovieService;

    private readonly characterService: CharacterService;

    constructor(private apiKey?: string) {
        this.client = new Client(apiKey);
        this.bookService = new BookService(this.client);
        this.movieService = new MovieService(this.client);
        this.characterService = new CharacterService(this.client);
    }

    /**
     *  @param {QueryObject} queryObject - if omitted returns all books
     *  @param {Pagination} queryObject.pagination - object containing {page, limit, offset}
     *  @param {Sort} queryObject.sort - object containing {field, direction}
     *  @param {Search} queryObject.search - TODO
     */
    public async books(queryObject?: QueryObject) {
        return await this.bookService.getBooks(queryObject);
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

    public async getMovieQuotes(movieId: string, queryObject?: QueryObject) {
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

    public async getCharacterQuotes(characterId: string, queryObject?: QueryObject) {
        return this.characterService.getCharacterQuotes(characterId, queryObject);
    }
}
