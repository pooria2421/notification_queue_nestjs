import { Injectable } from '@nestjs/common';
import axios from 'axios'
import {SendConfirmSmsInterface} from './interfaces/notif.interfaces'
@Injectable()
export class NotifService {
  // send request to qeue mediana fo send sms service
  // params (argument)
  // phone_number
  // confirm_code 
  sendConfirmSMS(argument : SendConfirmSmsInterface){
    const {phone_number , confirm_code} = argument
    axios.post(process.env.url , {
      "op":"pattern",
      "user":process.env.Uname,
      "pass":process.env.Pass,
      "fromNum":"3000505",
      "toNum":phone_number,
      "patternCode":process.env.patternConfirm,
      "inputData":[
      {"confirm_code":confirm_code}
       ]
    },{
      headers : {
        Authorization: "AccessKey"+ " " +process.env.MedianaToken
    }
       }
    )
  }

}
