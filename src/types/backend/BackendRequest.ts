import { Method, AxiosRequestConfig } from 'axios';

export interface BackendRequest<T> {
    method: Method;
    endpoint: string;
    data?: T;
    config?: AxiosRequestConfig;
}
