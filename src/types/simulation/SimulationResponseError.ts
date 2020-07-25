import { SimulationResponse } from './SimulationResponse';
import { GenericError } from '../util';

export interface SimulationResponseError<T> extends SimulationResponse {
  errors: GenericError<T>[];
}
