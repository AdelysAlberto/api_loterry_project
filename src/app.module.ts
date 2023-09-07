import { Module } from '@nestjs/common';
import { ContactModule } from './modules/contacts';
import { LotteryModule } from './modules/lottery/lottery.module';
import { BetsModule } from './modules/bets/bets.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
    }),
    ContactModule,
    LotteryModule,
    BetsModule,
  ],
})
export class AppModule {}
