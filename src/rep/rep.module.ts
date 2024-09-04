import { Module } from '@nestjs/common';
import { RepController } from './rep.controller';
import { RepService } from './rep.service';

@Module({
  controllers: [RepController],
  providers: [RepService]
})
export class RepModule {}
