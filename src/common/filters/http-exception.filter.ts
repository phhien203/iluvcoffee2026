import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter<
  T extends HttpException,
> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();

    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse();

    const err =
      typeof exceptionResponse === 'string'
        ? { error: exceptionResponse }
        : exceptionResponse;

    response
      .status(status)
      .json({ ...err, timestamp: new Date().toISOString() });
  }
}
