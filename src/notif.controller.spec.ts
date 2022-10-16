import { Test, TestingModule } from '@nestjs/testing';
import { NotifController } from './notif.controller';
import { NotifService } from './notif.service';

describe('AppController', () => {
  let appController: NotifController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NotifController],
      providers: [NotifService],
    }).compile();

    appController = app.get<NotifController>(NotifController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      // expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
