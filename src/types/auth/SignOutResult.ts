import { BackendResponse } from '../backend';
import { User } from '../auth';

export interface SignOutResult extends BackendResponse<User> {}
