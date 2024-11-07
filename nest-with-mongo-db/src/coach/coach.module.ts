import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Coach, CoachSchema } from './coach.schema';
import { CoachService } from './coach.service';
import { CoachController } from './coach.controller';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Coach.name, schema: CoachSchema }]),
    ],
    providers: [CoachService],
    controllers: [CoachController],
})
export class CoachModule {}
