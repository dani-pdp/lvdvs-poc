import { Module } from '@nestjs/common';
import { GladiatorsController } from './gladiators.controller';
import { GladiatorsModule } from 'src/core/use_cases/gladiators/gladiators.module';

@Module({
  controllers: [GladiatorsController],
  imports: [GladiatorsModule],
})
export class ControllersModule {}
