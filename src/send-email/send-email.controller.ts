import { Controller, Get } from '@nestjs/common';
import { SendEmailService } from './send-email.service';

@Controller('send-email')
export class SendEmailController {
    constructor(private sendEmailService: SendEmailService) {}
    @Get()
    sendEmail() {
        return this.sendEmailService.sendEmail();
    }
}
