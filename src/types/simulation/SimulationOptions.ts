import { APMUserContext } from '../apm';
import { APMCustomContext } from '../apm';
import { APMLabel } from '../apm';

export interface SimulationOptions {
  randomUserContext: boolean;
  userContext?: APMUserContext;
  randomCustomContext: boolean;
  customContext?: APMCustomContext;
  randomLabels: boolean;
  labels?: APMLabel[];
}
