import { Controller, Get, HttpCode, Param } from '@nestjs/common';
import { AdvisorService } from './advisor.service';
import { Advisor } from './advisor';

// this annotation sets up this class as a REST controller
// and gives it the proper suffix
// all requests to baseURL/advisor/* will route here
@Controller('advisor')
export class AdvisorController {
    constructor(private service: AdvisorService) {}

    // get all
    @Get()
    @HttpCode(200) // default code if successful; erros thrown within will override.
    getAllAdvisors(): Promise<Advisor[]> {
        return this.service.getAllAdvisors();
    }

    // get by ID
    // /advisor/:id
    @Get(':id')
    @HttpCode(200)
    // using @Param to get path variables
    // by itself, it returns an object with all params as key-value pairs
    // if you specify a param in the parentheses, it returns just that value
    getAdvisorById(@Param() params: Record<string, any>): Promise<Advisor>{
        return this.service.getAdvisorById(params.id);
    }
    // getAdvisorById(@Param('id) id: number){
            
    // }

}
