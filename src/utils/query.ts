import {QueryObject} from "../types/queryObject";
import {Sort} from "../types/sort";

const SORT = 'sort';

export function stringify(queryObject: QueryObject) {
    const searchParams: URLSearchParams = new URLSearchParams();

    if (queryObject.pagination) {
        Object.entries(queryObject.pagination)
            .forEach(([key, value]) => searchParams.append(key, value));
    }

    if (queryObject.sort) {
        searchParams.append(SORT, formatSort(queryObject.sort));
    }

    if (queryObject.search) {
        // TODO
    }

    return searchParams.toString();
}

function formatSort({field, direction}: Sort) {
    return `${field}:${direction}`
}
