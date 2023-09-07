import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { LotteryService } from '../services/lottery.service';
import { CreateLotteryDto } from '../dto/create-lottery.dto';

@Controller('lottery')
export class LotteryController {
  constructor(private readonly lotteryService: LotteryService) {}

  @Get()
  findAll() {
    return this.lotteryService.findAll();
  }
  @Get(':id')
  findBy(@Param('id', ParseUUIDPipe) id: string) {
    const findLotteryById = this.lotteryService.findBy(id);

    return {
      data: findLotteryById,
    };
  }

  @Post()
  create(@Body() body: CreateLotteryDto) {
    this.lotteryService.create(body);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() body) {
    return {
      id,
      body,
    };
  }
}
