export interface GenericError<T> {
    code?: number | string;
    category?: string;
    name?: string;
    message?: string;
    data?: T;
}
