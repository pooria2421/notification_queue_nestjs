import { NestMiddleware } from '@nestjs/common';
import { RmqContext } from '@nestjs/microservices';
import { NextFunction } from 'express';
export declare class ConfirmMiddleware implements NestMiddleware {
    constructor();
    use(data: number[], context: RmqContext, next: NextFunction): void;
}
