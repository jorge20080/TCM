import sgMail from '@sendgrid/mail';
import { TMessage } from '../types/email.js';

export class Email {
    static async send(msg: TMessage) {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        try {
            const response = await sgMail.send(msg);
        } catch (err) {
            console.error(err);
        }
    }
}