import winston, { Logger } from 'winston';

export class LoggerService {
    static logger: Logger = winston.createLogger({
        transports: [new winston.transports.Console()]
    });
}
