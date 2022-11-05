import {Pagination} from "./pagination";
import {Search} from "./search";
import {Sort} from "./sort";

export interface QueryObject {
    pagination: Pagination;
    sort: Sort;
    search: Search; // TODO
}
