import { RmqContext } from '@nestjs/microservices';
export declare class NotifController {
    getNotifications(data: number[], context: RmqContext): void;
}
