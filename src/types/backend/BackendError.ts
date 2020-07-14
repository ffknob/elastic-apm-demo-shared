export interface BackendError<T> {
    code?: number | string;
    category?: string;
    name?: string;
    message?: string;
    data?: T;
}
