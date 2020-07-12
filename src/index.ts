/// <reference path="./types/apm/index.ts" />
/// <reference path="./types/auth/index.ts" />
/// <reference path="./types/backend/index.ts" />
/// <reference path="./types/metadata/index.ts" />
/// <reference path="./types/simulation/index.ts" />

declare module '@ffknob/elastic-apm-demo-shared/types' {
    // @ts-ignore
    export * from '@ffknob/elastic-apm-demo-types/types/apm';
    // @ts-ignore
    export * from '@ffknob/elastic-apm-demo-types/types/auth';
    // @ts-ignore
    export * from '@ffknob/elastic-apm-demo-types/types/backend';
    // @ts-ignore
    export * from '@ffknob/elastic-apm-demo-types/types/metadata';
    // @ts-ignore
    export * from '@ffknob/elastic-apm-demo-types/types/simulation';
}
