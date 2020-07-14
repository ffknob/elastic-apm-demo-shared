import { SimulationResponse } from './SimulationResponse';
import { BackendError } from '../backend';

export interface SimulationResponseError<T> extends SimulationResponse {
    errors: BackendError<T>[];
}
