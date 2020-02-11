import { Test, TestingModule } from '@nestjs/testing';
import { DogsController } from '../../src/controllers/dogs.controller';
import { GetAllBreeds } from '../../src/core/use_cases/dogs/get.all.breeds';
import { GetBreedImages } from '../../src/core/use_cases/dogs/get.breed.images';
import { GetRandomBreedImage } from '../../src/core/use_cases/dogs/get.random.breed.image';
import { GetRandomImage } from '../../src/core/use_cases/dogs/get.random.image';
import { GetSubbreedsList } from '../../src/core/use_cases/dogs/get.subreeds.list';
import { DogsService } from '../../src/services/dogs/dogs.service';
import { DogsClient } from '../../src/services/dogs/client/dogs.client';


describe('Dogs Controller', () => {
  let controller: DogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DogsController],
      providers: [DogsService, GetAllBreeds, GetBreedImages, GetRandomBreedImage, GetRandomImage, GetSubbreedsList, DogsClient]
    }).compile();

    controller = module.get<DogsController>(DogsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
