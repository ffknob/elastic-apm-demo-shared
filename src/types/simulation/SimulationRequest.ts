import { SimulationParameters } from '../simulation';
import { SimulationOptions } from '../simulation';

export interface SimulationRequest {
  parameters: SimulationParameters;
  options: SimulationOptions;
  complexTransaction?: {
    totalSubTransactions: number;
    totalSpans: number;
  };
  distributedTransaction?: {
    totalSubTransactions: number;
    totalSpans: number;
  };
}
