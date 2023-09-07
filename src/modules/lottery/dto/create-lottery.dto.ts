import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateLotteryDto {
  @IsNumber({}, { each: true })
  @IsOptional()
  winningNumbers: number[];

  @IsDateString()
  drawDate: Date;

  @IsString()
  @IsOptional()
  prize?: string;

  @IsString()
  @IsOptional()
  status?: string;
}
