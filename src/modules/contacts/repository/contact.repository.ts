import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from '../entities/contact.entity';
import { Repository } from 'typeorm';
import { IContact } from '../interfaces/contact.interface';

export class ContactRepository {
  constructor(
    @InjectRepository(Contact)
    private readonly contactRepository: Repository<IContact>,
  ) {}

  async create(lottery) {
    const created = this.contactRepository.create(lottery);
    return this.contactRepository.save(created);
  }

  async findAll() {
    const findBy = await this.contactRepository.find();
    if (!findBy) {
      return null;
    }
    return findBy;
  }

  async findBy({ email }) {
    const findBy = await this.contactRepository.findOneBy({ email });
    if (!findBy) {
      return null;
    }
    return findBy;
  }
}
