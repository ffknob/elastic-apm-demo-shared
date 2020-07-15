import { Subject } from 'rx';

import {
    SimulationRequest,
    SimulationStats,
    SimulationType,
    SimulationResponseResult,
    SimulationResponseError
} from '../simulation';
import { Request } from '../backend';

export interface Simulation {
    id?: string;
    type: SimulationType;
    text?: string;
    color?: string;
    totalSubTransactions?: number;
    totalSpans?: number;
    simulationRequest?: SimulationRequest;
    requests?: Request<SimulationRequest>[];
    requests$?: Subject<Request<SimulationRequest>[]>;
    stats?: SimulationStats;
    stats$?: Subject<SimulationStats>;
}
