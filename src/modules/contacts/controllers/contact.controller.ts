import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ContactService } from '../services/contact.service';
import { CreateContactDto } from '../dto/create-contact.dto';

@Controller('contacts')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get()
  findAll() {
    return this.contactService.findAll();
  }
  @Get(':id')
  findById(@Param('id', ParseUUIDPipe) id: string) {
    console.log(`the id is ${id}`);
    const findContactsById = this.contactService.findById(id);

    return {
      data: findContactsById,
    };
  }

  @Post()
  create(@Body() body: CreateContactDto) {
    return this.contactService.create(body);
  }

  @Post('/login')
  login(@Body() body: { email: string; password: string }) {
    return this.contactService.login(body);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body) {
    return {
      id,
      body,
    };
  }
}
