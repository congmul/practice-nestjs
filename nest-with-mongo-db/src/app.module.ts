import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { TransactionModule } from './transaction/transaction.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { envValidate } from './env.validation';
import { TeamModule } from './team/team.module';
import { CoachModule } from './coach/coach.module';
import { PlayerModule } from './player/player.module';

@Module({
  imports: [
    ConfigModule.forRoot(
      {
        isGlobal: true, // Make ConfigModule globally available
        envFilePath: '.env',
        validate: envValidate
      }
    ),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'), // Access the MONGODB_URI variable
      }),
      inject: [ConfigService],
    }), 
    UserModule, TransactionModule, AuthModule, TeamModule, CoachModule, PlayerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
