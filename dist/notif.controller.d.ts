import { RmqContext } from '@nestjs/microservices';
import { NotifService } from './notif.service';
export declare class NotifController {
    private readonly notifService;
    constructor(notifService: NotifService);
    getNotifications(data: number[], context: RmqContext): string;
    getNotificationProvider(data: number[], context: RmqContext): "DONE" | "FAILD";
}
