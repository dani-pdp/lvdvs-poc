import { Module } from '@nestjs/common';
import { GladiatorsServiceModule } from '../../../services/gladiators/gladiators.service.module';
import { GetAllGladiators } from './get.all.gladiators';
import { GetGladiator } from './get.gladiator';
import { CreateGladiator } from './create.gladiator';
import { ModifyGladiator } from './modify.gladiator';
import { DeleteGladiator } from './delete.gladiator';
import { RestoreGladiatorStatus } from './restore.gladiator.status';
import { RestoreAllGladiatorStatus } from './restore.all.gladiators.status';
@Module({
  providers: [
    GetAllGladiators,
    GetGladiator,
    CreateGladiator,
    ModifyGladiator,
    DeleteGladiator,
    RestoreGladiatorStatus,
    RestoreAllGladiatorStatus,
  ],
  imports: [GladiatorsServiceModule],
  exports: [
    GetAllGladiators,
    GetGladiator,
    CreateGladiator,
    ModifyGladiator,
    DeleteGladiator,
    RestoreGladiatorStatus,
    RestoreAllGladiatorStatus,
  ],
})
export class GladiatorsModule {}
