import { Observable } from 'rxjs';
import { BackendRequest } from '../backend';
import { BackendRequestTime } from '../backend';
import { BackendResponse } from '../backend';

export default interface Request<T, U> {
    id: string;
    request: BackendRequest<T>;
    response?: BackendResponse<U>;
    response$?: Observable<BackendResponse<U>>;
    time: BackendRequestTime;
}
