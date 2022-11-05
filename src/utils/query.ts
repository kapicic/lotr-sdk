import {QueryObject, Sort} from "../types";

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

    const searchString = searchParams.toString();

    if (queryObject.filters?.length) {
        const filters = queryObject.filters.reduce(
            (previousValue, currentValue) => previousValue + currentValue, '');

        return `${searchString}${filters}`;
    }

    return searchString;
}

function formatSort({field, direction}: Sort) {
    return `${field}:${direction}`
}
