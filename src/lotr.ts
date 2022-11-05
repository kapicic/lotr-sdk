/// <reference path="./types/index.ts" />
import { Client } from './client';
import {BookService} from './service';
import {QueryObject} from './types';
import {MovieService} from "./service/movie";

export class Lotr {

    private readonly client: Client;

    private readonly bookService: BookService;

    private readonly movieService: MovieService;

    constructor(private apiKey?: string) {
        this.client = new Client(apiKey);
        this.bookService = new BookService(this.client);
        this.movieService = new MovieService(this.client);
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
        return await this.movieService.getMovies(queryObject);
    }

    public async movie(id: string) {
        return this.movieService.getById(id);
    }

    public async getMovieQuotes(movieId: string, queryObject?: QueryObject) {
        return this.movieService.getQuotes(movieId, queryObject);
    }
}
