import { SimulationRequestError } from '../simulation';

export interface BackendError<U> {
    errors?: Array<SimulationRequestError>;
}
