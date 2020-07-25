export const SPAN_TYPES: string[] = [
    'ext.http.http',
    'db.elasticsearch.request',
    'db.mongodb.query',
    'db.postgresql.query',
    'db.graphql.execute',
    'cache.redis',
    'websocket.send'
];

export type SpanType = typeof SPAN_TYPES;
