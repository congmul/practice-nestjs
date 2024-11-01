import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  // controllers are classes with endpoints we can hit from the frontend
  controllers: [AppController],
  // providers (most often services) are classes we can inject into other classes to provide functionality
  providers: [AppService],
})
export class AppModule {}
