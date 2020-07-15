import { BackendResponse } from '../backend';
import { GenericError } from '../util';

export interface BackendError<T> extends BackendResponse, GenericError<T> {}
