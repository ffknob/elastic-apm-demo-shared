import { BackendResponse } from '../backend';

export interface BackendRedirect<T> extends BackendResponse {
    location: URL;
    data?: T;
}
