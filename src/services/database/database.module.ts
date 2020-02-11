import { Module } from '@nestjs/common';
import { DatabaseConfig } from './database.config';

@Module({
  imports: [DatabaseConfig.forRoot()],
})
export class DatabaseModule {}