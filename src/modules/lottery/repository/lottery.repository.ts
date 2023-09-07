import { InjectRepository } from '@nestjs/typeorm';
import { Lottery } from '../entities/lottery.entity';
import { Repository } from 'typeorm';

export class LotteryRepository {
  constructor(
    @InjectRepository(Lottery)
    private readonly lotteryRepository: Repository<Lottery>,
  ) {}

  async create(lottery) {
    const created = this.lotteryRepository.create(lottery);
    return this.lotteryRepository.save(created);
  }

  async findAll() {
    const findBy = await this.lotteryRepository.find();
    if (!findBy) {
      return null;
    }
    return findBy;
  }

  async findBy(filter) {
    const findBy = await this.lotteryRepository.findOneBy(filter);
    if (!findBy) {
      return null;
    }
    return findBy;
  }
}
