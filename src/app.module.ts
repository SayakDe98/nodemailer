import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SendEmailModule } from './send-email/send-email.module';

@Module({
  imports: [SendEmailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
