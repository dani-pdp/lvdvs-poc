import { Test } from '@nestjs/testing';
import { CreateCat } from '../../../../src/core/use_cases/cats/create.cat';
import { CatsClient } from '../../../../src/services/cats/client/cats.client';
import { CatsService } from '../../../../src/services/cats/cats.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from '../../../../src/core/entities/cat';
import { DatabaseModule } from '../../../../src/services/database/database.module';
import { DomainError } from '../../../../src/core/errors';

describe('Get Cat tests', () => {
  let createCat: CreateCat;
  let catsClient: CatsClient;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [DatabaseModule, TypeOrmModule.forFeature([Cat])],
      providers: [CatsService, CreateCat, CatsClient],
    }).compile();
    catsClient = module.get<CatsClient>(CatsClient);
    createCat = module.get<CreateCat>(CreateCat);
  });

  describe('Create Cat - Happy path', () => {
    it('Bio lenght ', async () => {
      const cat = { id: '1', name: 'Gatete', years: 2, bio: '1234' };
      await expect(createCat.call(cat)).rejects.toThrowError(DomainError);
    });
    it('Id length ', async () => {
      const cat = { id: '1234', name: 'Gatete', years: 2, bio: '122345' };
      await expect(createCat.call(cat)).rejects.toThrowError(DomainError);
    });
  });
});
