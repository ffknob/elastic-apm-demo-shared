import { APMUserContext } from '../apm';

export interface SimulationUserContext extends APMUserContext {
    firstName: string;
    lastName: string;
    random: boolean;
}
