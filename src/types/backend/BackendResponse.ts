import { BackendResponseMetadata } from '../metadata';

export interface BackendResponse {
    id?: string;
    success: boolean;
    statusCode: number;
    statusMessage: string;
    metadata?: BackendResponseMetadata;
}
