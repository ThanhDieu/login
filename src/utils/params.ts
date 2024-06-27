export function getQueryParams() {
    const searchParams = new URLSearchParams(window.location.search);
    const queryParams: { [key: string]: string } = {};

    for (const [key, value] of searchParams.entries()) {
        queryParams[key] = value;
    }

    return queryParams;
}

export function convertQueryParams(object: any) {
    const newParams = new URLSearchParams(Object.entries(object))
    return newParams
}