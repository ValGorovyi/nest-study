import { Controller, Get} from '@nestjs/common';
import { RepService } from './rep.service';

@Controller('rep')
export class RepController {
    constructor(private readonly dogs: RepService) {}

    @Get('dogs')
    getDogs(){
        return this.dogs.getDogs()
    }
}
