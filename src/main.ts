import { NestFactory } from '@nestjs/core';
import { NotifModule } from './notif.module';
import { ValidationPipe } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(NotifModule);
 app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://127.0.0.1:5672'],
      queue: 'notification_queue',
      queueOptions: {
        durable: false
      },
    },
  });
  await app.startAllMicroservices()

  await app.listen(3002);
}
bootstrap();
