import { Module } from '@nestjs/common';
import { GladiatorsController } from './gladiators.controller';
import { CombatsController } from './combats.controller';
import { GladiatorsModule } from '../core/use_cases/gladiators/gladiators.module';
import { CombatsModule } from '../core/use_cases/combat/combats.module';

@Module({
  controllers: [GladiatorsController, CombatsController],
  imports: [GladiatorsModule, CombatsModule],
})
export class ControllersModule {}
