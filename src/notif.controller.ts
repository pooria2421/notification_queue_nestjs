import { Controller } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { NotifService } from './notif.service';

@Controller()
export class NotifController {
  constructor(
    private readonly notifService: NotifService,
    ) {}

    // notification queue 
    @MessagePattern('notifications')
    getNotifications(@Payload() data: number[], @Ctx() context: RmqContext) {
      // convert data to Json stringify
      let stringify = JSON.stringify(context.getMessage())
      
      // convert stringify vaiable to json and send to service
      let json = JSON.parse(((Buffer.from(JSON.parse(stringify).content.data)).toString())).data
      this.notifService.sendConfirmSMS(json)
      
      return "DONE"
    }


}