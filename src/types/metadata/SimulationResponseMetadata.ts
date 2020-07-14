import {
    HostMetadata,
    ContainerMetadata,
    KubernetesMetadata
} from '../metadata';

export interface SimulationResponseMetadata {
    host?: Partial<HostMetadata>;
    container?: Partial<ContainerMetadata>;
    kubernetes?: Partial<KubernetesMetadata>;
}
