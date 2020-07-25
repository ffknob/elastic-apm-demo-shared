import { SimulationStatsTime } from '../simulation';

export interface SimulationStats {
  total?: number;
  sent?: number;
  completed?: number;
  timedOut?: number;
  time?: SimulationStatsTime;
}
