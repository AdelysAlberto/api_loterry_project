import { Module } from '@nestjs/common';
import { LotteryController } from './controllers/lottery.controller';
import { LotteryService } from './services/lottery.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lottery } from './entities/lottery.entity';
import { LotteryRepository } from './repository/lottery.repository';

@Module({
  controllers: [LotteryController],
  providers: [LotteryService, LotteryRepository],
  imports: [TypeOrmModule.forFeature([Lottery])],
})
export class LotteryModule {}
