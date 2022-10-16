"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotifModule = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const notif_controller_1 = require("./notif.controller");
const notif_middleware_1 = require("./notif.middleware");
const notif_service_1 = require("./notif.service");
const config_1 = require("@nestjs/config");
let NotifModule = class NotifModule {
    configure(consumer) {
        consumer
            .apply(notif_middleware_1.ConfirmMiddleware);
    }
};
NotifModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            microservices_1.ClientsModule.register([
                {
                    name: 'NOTIF_SERVICE',
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: ['amqp://127.0.0.1:5672'],
                        queue: 'notification_queue',
                        queueOptions: {
                            durable: false
                        },
                    },
                },
            ]),
        ],
        controllers: [notif_controller_1.NotifController],
        providers: [notif_service_1.NotifService],
    })
], NotifModule);
exports.NotifModule = NotifModule;
//# sourceMappingURL=notif.module.js.map