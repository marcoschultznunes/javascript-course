export interface RequestError extends Error{
    statusCode?: number,
    status?: number,
    errors?: Error[]
}
