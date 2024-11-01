import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // In Next, we have decorators (annotations) we can use to easily set up controller methods.
  // Default endpoint - 'host/'
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
