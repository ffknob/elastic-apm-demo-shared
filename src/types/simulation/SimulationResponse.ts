import { SimulationResponseMetadata } from '../metadata';
import { BackendError } from '../backend';

export interface SimulationResponse<T> {
    success: boolean;
    errors?: BackendError<T>[];
    metadata?: SimulationResponseMetadata;
}
