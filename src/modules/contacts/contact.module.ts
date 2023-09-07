import { Module } from '@nestjs/common';
import { ContactController } from './controllers/contact.controller';
import { ContactService } from './services/contact.service';
import { ContactRepository } from './repository/contact.repository';
import { Contact } from './entities/contact.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [ContactController],
  providers: [ContactService, ContactRepository, JwtService],
  imports: [TypeOrmModule.forFeature([Contact])],
})
export class ContactModule {}
