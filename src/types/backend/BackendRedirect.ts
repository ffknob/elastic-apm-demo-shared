import { BackendResponse } from '../backend';

export interface BackendRedirect<T> extends BackendResponse {
    location: string;
    data?: T;
}
