import { BackendResponse } from '../backend';
import { User } from '../auth';

export interface SignInResult extends BackendResponse<User> {}
