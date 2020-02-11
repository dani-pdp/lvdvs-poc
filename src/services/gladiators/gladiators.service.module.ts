import { Module } from '@nestjs/common';
import { GladiatorsService } from './gladiators.service';
import { GladiatorsClient } from './client/gladiators.client';
import { DatabaseModule } from '../database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Gladiator } from 'src/core/entities/gladiator';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Gladiator])],
  providers: [GladiatorsService, GladiatorsClient],
  exports: [GladiatorsService, GladiatorsClient],
})
export class GladiatorsServiceModule {
  constructor(private readonly connection: Connection) {}
}
