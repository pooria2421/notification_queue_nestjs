import { Module , MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NotifController } from './notif.controller';
import { NotifService } from './notif.service';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [    
    ConfigModule.forRoot(),
    ClientsModule.register([
    {
      name: 'NOTIF_SERVICE',
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://127.0.0.1:5672'],
        queue: 'notification_queue',
        queueOptions: {
          durable: false
        },
      },
    },
  ]),],
  controllers: [NotifController],
  providers: [NotifService],
})

export class NotifModule {}
