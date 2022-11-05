import {QueryObject, Sort} from "../types";
import {Filter} from "../filter/filter";

const SORT = 'sort';
const LIMIT = 'limit';
const PAGE = 'page';
const OFFSET = 'offset';

export function stringify(queryObject: QueryObject) {
    const searchParams: URLSearchParams = new URLSearchParams();

    appendPagination(searchParams, queryObject);
    appendSort(searchParams, queryObject.sort);

    const searchString = searchParams.toString();

    if (queryObject.filters?.length) {
        return withFilters(searchString, queryObject.filters);

    }

    return searchString;
}

function formatSort({by, direction}: Sort) {
    return `${by}:${direction}`
}

// Not really happy about mutating input
function appendPagination(searchParams: URLSearchParams, queryObject: QueryObject) {
    if (queryObject.page) {
        searchParams.append(PAGE, queryObject.page.toString());
    }

    if (queryObject.limit) {
        searchParams.append(LIMIT, queryObject.limit.toString());
    }

    if (queryObject.offset) {
        searchParams.append(OFFSET, queryObject.offset.toString());
    }
}

function appendSort(searchParams: URLSearchParams, sort: Sort) {
    if (sort) {
        searchParams.append(SORT, formatSort(sort));
    }
}

function withFilters(searchString: string, filters: Filter[]): string {
    const filterValues = filters.reduce(
        (previousValue, currentValue) => previousValue + currentValue, '');

    return searchString ? `${searchString}&${filterValues}` : `${filterValues}`;
}
