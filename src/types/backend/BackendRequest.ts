import { Method, AxiosRequestConfig } from 'axios';

export interface BackendRequest<T> {
    method: Method;
    endpoint: string;
    config?: AxiosRequestConfig;
    data?: T;
}
