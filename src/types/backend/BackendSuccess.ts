import { BackendResponse } from '../backend';

export interface BackendSuccess<T> extends BackendResponse {
    data?: T;
}
