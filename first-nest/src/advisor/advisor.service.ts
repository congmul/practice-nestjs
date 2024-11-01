import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Advisor } from './advisor';
import { Repository } from 'typeorm';

@Injectable()
export class AdvisorService {
    // we can create and inject a repository for our advisors right in the constructor
    constructor(@InjectRepository(Advisor) private repo: Repository<Advisor>){}

    async getAllAdvisors(): Promise<Advisor[]> {
        // we can now just call straight to our repo, using its pre-defined methods.
        return await this.repo.find();
    }

    async getAdvisorById(id: number): Promise<Advisor> {
        return await this.repo.findOne({ where: {id}});
    }
}
