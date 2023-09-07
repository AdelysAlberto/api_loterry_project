import { ContactRepository } from './../repository/contact.repository';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { CreateContactDto } from '../dto/create-contact.dto';
import { loginAdapter } from '../adapter/contact.adapter';

@Injectable()
export class ContactService {
  constructor(
    private readonly contactRepository: ContactRepository,
    private jwtService: JwtService,
  ) {}
  async create(contact: CreateContactDto) {
    try {
      const contactParse = {
        ...contact,
        password: bcrypt.hashSync(contact.password, 10),
      };

      const created = await this.contactRepository.create(contactParse);

      return created;
    } catch (e) {
      console.log('entra err', e);
      throw new BadRequestException('error');
    }
  }

  async login({ email, password }) {
    const user = await this.contactRepository.findBy({ email });
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      throw new UnauthorizedException();
    }
    return {
      token: await this.jwtService.signAsync(loginAdapter(user), {
        secret: process.env.JWT_KEY,
      }),
    };
  }

  async findAll() {
    return this.contactRepository.findAll();
  }

  async findById(email: string) {
    const contact = await this.contactRepository.findBy({ email });

    if (!contact) {
      throw new NotFoundException('ContactNotFound');
    }
    return contact;
  }
}
