import { Module } from '@nestjs/common';
import { DogsController } from './dogs.controller';
import { DogsModule } from '../core/use_cases/dogs/dogs.module';
import { CatsController } from './cats.controller';
import { CatsModule } from '../core/use_cases/cats/cats.module';
import { CatsServiceModule } from 'src/services/cats/cats.service.module';

@Module({
  controllers: [DogsController, CatsController],
  imports: [DogsModule, CatsModule],
})
export class ControllersModule {}
