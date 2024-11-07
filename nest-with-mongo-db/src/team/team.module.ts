import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Team, TeamSchema } from './team.schema';
import { TeamController } from './team.controller';
import { TeamService } from './team.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Team.name, schema: TeamSchema }]),
  ],
  providers: [TeamService],
  controllers: [TeamController]
})
export class TeamModule {}