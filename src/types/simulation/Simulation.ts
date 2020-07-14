import { Subject } from 'rx';

import {
    SimulationRequest,
    SimulationStats,
    SimulationType,
    SimulationRequestResult,
    SimulationRequestError
} from '../simulation';
import { Request, BackendSuccess, BackendError } from '../backend';

export interface Simulation {
    id?: string;
    type: SimulationType;
    text?: string;
    color?: string;
    totalSubTransactions?: number;
    totalSpans?: number;
    simulationRequest?: SimulationRequest;
    requests?: Request<
        SimulationRequest,
        | BackendSuccess<SimulationRequestResult>
        | BackendError<SimulationRequestError>
    >[];
    requests$?: Subject<
        Request<
            SimulationRequest,
            | BackendSuccess<SimulationRequestResult>
            | BackendError<SimulationRequestError>
        >[]
    >;
    stats?: SimulationStats;
    stats$?: Subject<SimulationStats>;
}
