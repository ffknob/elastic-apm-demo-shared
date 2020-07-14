import { Observable } from 'rx';

import {
    BackendRequest,
    BackendRequestTime,
    BackendResponse
} from '../backend';

export interface Request<T, U> {
    id: string;
    request: BackendRequest<T>;
    response?: BackendResponse<U>;
    response$?: Observable<BackendResponse<U>>;
    time: BackendRequestTime;
}
