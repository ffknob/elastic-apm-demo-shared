import {
  HostMetadata,
  ContainerMetadata,
  KubernetesMetadata,
} from '../metadata';

export interface BackendResponseMetadata {
  host?: Partial<HostMetadata>;
  container?: Partial<ContainerMetadata>;
  kubernetes?: Partial<KubernetesMetadata>;
}
