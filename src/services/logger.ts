import winston, { Logger } from 'winston';

const DEFAULT_LOG_LEVEL: string = 'error';

export class LoggerService {
    static logLevel: string = process.env.LOG_LEVEL || DEFAULT_LOG_LEVEL;

    static logger: Logger = winston.createLogger({
        transports: [new winston.transports.Console()],
        level: LoggerService.logLevel
    });
}
