import { Injectable } from '@nestjs/common';
import { dogs } from '../mops/mops';

@Injectable()
export class RepService {
    getDogs(){
        return dogs
    }
}
