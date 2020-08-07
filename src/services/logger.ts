import winston, { Logger } from 'winston';

const DEFAULT_LOG_LEVEL: string = 'error';

export class LoggerService {
    static logger: Logger = winston.createLogger({
        transports: [new winston.transports.Console()],
        level: process.env.LOG_LEVEL || DEFAULT_LOG_LEVEL
    });
}
