import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  use(_req: any, res: any, next: () => void) {
    console.time('Request-response time');
    console.log('Hello from middleware');

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    res.on('finish', () => console.timeEnd('Request-response time'));

    next();
  }
}
