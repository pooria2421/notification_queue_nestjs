"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotifService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let NotifService = class NotifService {
    sendConfirmSMS(argument) {
        const { phone_number, confirm_code } = argument;
        axios_1.default.post(process.env.urlSms, {
            "op": "pattern",
            "user": process.env.Uname,
            "pass": process.env.Pass,
            "fromNum": "3000505",
            "toNum": phone_number,
            "patternCode": process.env.patternConfirm,
            "inputData": [
                { "confirm_code": confirm_code }
            ]
        }, {
            headers: {
                Authorization: "AccessKey" + " " + process.env.MedianaToken
            }
        }).then(response => {
            console.log(response.data);
        }).catch(e => {
            console.log(e.response.data);
        });
    }
    sendProviderSMS(argument) {
        const { phone_number, category_name } = argument;
        axios_1.default.post(process.env.urlSms, {
            "op": "send",
            "uname": process.env.Uname,
            "pass": process.env.Pass,
            "message": "درخواست جدیدی وارد سامانه شده که شما میتوانید تامین کنید",
            "from": "3000505",
            "to": [...phone_number],
        }, {
            headers: {
                Authorization: "AccessKey" + " " + process.env.MedianaToken
            }
        }).then(response => {
            console.log(response.data);
        }).catch(e => {
            console.log(e.response.data);
        });
    }
    sendEMAIL() {
    }
};
NotifService = __decorate([
    (0, common_1.Injectable)()
], NotifService);
exports.NotifService = NotifService;
//# sourceMappingURL=notif.service.js.map