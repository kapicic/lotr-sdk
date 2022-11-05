import {Pagination} from "./pagination";
import {Sort} from "./sort";
import {Filter} from "../filter/filter";

export interface QueryObject extends Partial<Pagination> {
    sort?: Sort;
    filters?: Filter[];
}
