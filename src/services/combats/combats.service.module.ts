import { Module } from '@nestjs/common';
import { CombatsService } from './combats.service';
import { CombatsClient } from './client/combats.client';
import { DatabaseModule } from '../database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Gladiator } from 'src/core/entities/gladiator';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Gladiator])],
  providers: [CombatsService, CombatsClient],
  exports: [CombatsService, CombatsClient],
})
export class CombatsServiceModule {
  constructor(private readonly connection: Connection) {}
}
