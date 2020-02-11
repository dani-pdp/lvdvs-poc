import { Module } from '@nestjs/common';
import { GladiatorsServiceModule } from '../../../services/gladiators/gladiators.service.module';
import { GetAllGladiators } from './get.all.gladiators';
import { GetGladiator } from './get.gladiator';
import { CreateGladiator } from './create.gladiator';
import { ModifyGladiator } from './modify.gladiator';
import { DeleteGladiator } from './delete.gladiator';

@Module({
  providers: [GetAllGladiators, GetGladiator, CreateGladiator, ModifyGladiator, DeleteGladiator],
  imports: [GladiatorsServiceModule],
  exports: [GetAllGladiators, GetGladiator, CreateGladiator, ModifyGladiator, DeleteGladiator],
})
export class GladiatorsModule {}
