import { Test, TestingModule } from '@nestjs/testing';
import { DogsService } from '../../../src/services/dogs/dogs.service';
import { DogsClient } from '../../../src/services/dogs/client/dogs.client';

describe('DogsService', () => {
  let service: DogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DogsService, DogsClient],
    }).compile();

    service = module.get<DogsService>(DogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
