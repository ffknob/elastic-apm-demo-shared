import { SimulationResponseMetadata } from '../metadata';

export interface SimulationResponse {
    success: boolean;
    metadata?: SimulationResponseMetadata;
}
