import { Module } from '@nestjs/common';
import { BetsService } from './services/bets.service';
import { BetsController } from './controllers/bets.controller';

@Module({
  controllers: [BetsController],
  providers: [BetsService],
})
export class BetsModule {}
