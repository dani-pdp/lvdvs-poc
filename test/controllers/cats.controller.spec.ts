import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from '../../src/controllers/cats.controller';
import { CatsService } from '../../src/services/cats/cats.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Cat } from '../../src/core/entities/cat';
import { Repository } from 'typeorm';
import { CatsClient } from '../../src/services/cats/client/cats.client';
import { GetAllCats } from '../../src/core/use_cases/cats/get.all.cats';
import { GetCat } from '../../src/core/use_cases/cats/get.cat';
import { CreateCat } from '../../src/core/use_cases/cats/create.cat';
import { ModifyCat } from '../../src/core/use_cases/cats/modify.cat';
import { DeleteCat } from '../../src/core/use_cases/cats/delete.cat';

describe('Cats Controller', () => {
  let catsController: CatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CatsService,
        CatsClient,
        GetAllCats,
        GetCat,
        CreateCat,
        ModifyCat,
        DeleteCat,
        { provide: getRepositoryToken(Cat), useFactory: repositoryMockFactory },
      ],
      controllers: [CatsController],
    }).compile();

    catsController = module.get<CatsController>(CatsController);
  });

  it('should be defined', () => {
    expect(catsController).toBeDefined();
  });
});

// @ts-ignore
export const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(() => ({
  findOne: jest.fn(),
  find: jest.fn(),
  update: jest.fn(),
  save: jest.fn(),
}));
export type MockType<T> = {
  [P in keyof T]: jest.Mock<{}>;
};
