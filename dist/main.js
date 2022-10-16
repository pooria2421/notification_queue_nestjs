"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const notif_module_1 = require("./notif.module");
const microservices_1 = require("@nestjs/microservices");
async function bootstrap() {
    const app = await core_1.NestFactory.create(notif_module_1.NotifModule);
    app.connectMicroservice({
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: ['amqp://127.0.0.1:5672'],
            queue: 'notification_queue',
            queueOptions: {
                durable: false
            },
        },
    });
    await app.startAllMicroservices();
    await app.listen(3002);
}
bootstrap();
//# sourceMappingURL=main.js.map