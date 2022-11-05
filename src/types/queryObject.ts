import {Pagination} from "./pagination";
import {Sort} from "./sort";
import {Filter} from "../filter/filter";

export interface QueryObject {
    pagination?: Pagination;
    sort?: Sort;
    filters?: Filter[];
}
