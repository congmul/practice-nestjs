import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdvisorModule } from './advisor/advisor.module';
import { AdvisorController } from './advisor/advisor.controller';
import { AdvisorService } from './advisor/advisor.service';
import { Advisor } from './advisor/advisor';

@Module({
  imports: [
    // setting up typeorm at the root level
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'first-nest',
      synchronize: false, // IMPORTANT!! if this is ture, your changes in the app will affect the schema!
      entities: [ Advisor] // must add DB entities as you create them.
    }),
    AdvisorModule
  ],
  // controllers are classes with endpoints we can hit from the frontend
  // add each controller as you create it
  controllers: [AppController, AdvisorController],
  // providers (most often services) are classes we can inject into other classes to provide functionality
  // add each service as you create it
  providers: [AppService, AdvisorService],
})
export class AppModule {}
