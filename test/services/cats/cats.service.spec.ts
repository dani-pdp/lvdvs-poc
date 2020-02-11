import { Test, TestingModule } from '@nestjs/testing';
import { CatsService } from '../../../src/services/cats/cats.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Cat } from '../../../src/core/entities/cat';
import { Repository } from 'typeorm';
import { CatsClient } from '../../../src/services/cats/client/cats.client';

describe('CatsService', () => {
  let service: CatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsService, CatsClient, { provide: getRepositoryToken(Cat), useFactory: repositoryMockFactory }],
    }).compile();

    service = module.get<CatsService>(CatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
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
