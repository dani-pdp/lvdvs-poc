import { Module } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { DogsClient } from './client/dogs.client';

@Module({
  providers: [DogsService, DogsClient],
  exports: [DogsService, DogsClient],
})
export class DogsServiceModule {}
