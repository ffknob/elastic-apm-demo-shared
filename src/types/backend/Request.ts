import { Observable } from 'rx';

import {
  BackendRequest,
  BackendRequestTime,
  BackendResponse,
} from '../backend';

export interface Request<T> {
  id: string;
  request: BackendRequest<T>;
  response?: BackendResponse;
  response$?: Observable<BackendResponse>;
  time: BackendRequestTime;
}
