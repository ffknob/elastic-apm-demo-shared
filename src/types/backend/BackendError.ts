export interface BackendError<T> {
    code?: number | string;
    category?: string;
    message?: string;
    data?: T;
}
