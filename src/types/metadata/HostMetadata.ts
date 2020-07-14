import { NetworkInterfaceInfo } from 'os';

export interface HostMetadata {
    hostname?: string;
    type?: string;
    platform?: string;
    arch?: string;
    release?: string;
    uptime?: number;
    loadavg?: number[];
    totalmem?: number;
    freemem?: number;
    cpus?: any[];
    networkInterfaces?: { [index: string]: NetworkInterfaceInfo[] };
}
