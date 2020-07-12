import { BackendResponseMetadata } from '../backend';

export interface BackendResponse<T> {
    id?: string;
    success: boolean;
    statusCode: number;
    statusMessage: string;
    metadata?: BackendResponseMetadata;
    body?: T;
}
