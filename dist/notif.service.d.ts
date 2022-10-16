import { SendConfirmSmsInterface, sendProviderSMSInterface } from './interfaces/notif.interfaces';
export declare class NotifService {
    sendConfirmSMS(argument: SendConfirmSmsInterface): void;
    sendProviderSMS(argument: sendProviderSMSInterface): void;
    sendEMAIL(): void;
}
