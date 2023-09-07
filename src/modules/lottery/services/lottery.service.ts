import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLotteryDto } from '../dto/create-lottery.dto';
import { LotteryRepository } from '../repository/lottery.repository';

@Injectable()
export class LotteryService {
  constructor(private readonly lotteryRepository: LotteryRepository) {}

  async create(body: CreateLotteryDto) {
    const lottery = await this.lotteryRepository.create(body);

    return lottery;
  }

  async findAll() {
    return this.lotteryRepository.findAll();
  }

  async findBy(id: string) {
    const theLottery = await this.lotteryRepository.findBy({ id });

    if (!theLottery) {
      throw new NotFoundException('ContactNotFound');
    }
    return theLottery;
  }
}
