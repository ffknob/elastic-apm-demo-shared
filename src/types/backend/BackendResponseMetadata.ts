import { HostMetadata } from '../metadata';
import { ContainerMetadata } from '../metadata';
import { KubernetesMetadata } from '../metadata';

export interface BackendResponseMetadata {
    host?: Partial<HostMetadata>;
    container?: Partial<ContainerMetadata>;
    kubernetes?: Partial<KubernetesMetadata>;
}
