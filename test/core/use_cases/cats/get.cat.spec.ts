import { Test } from '@nestjs/testing';
import { GetCat } from '../../../../src/core/use_cases/cats/get.cat';
import { CatsClient } from '../../../../src/services/cats/client/cats.client';
import { GET_CAT_RESPONSE } from '../../../services/cats/client/_fixtures_/cat.client';
import { GET_CAT_RESPONSE_ADAPTED } from './_fixtures_/get.cat';
import { CatsService } from '../../../../src/services/cats/cats.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from '../../../../src/core/entities/cat';
import { DatabaseModule } from '../../../../src/services/database/database.module';
import { DomainError } from '../../../../src/core/errors';

describe('Get Cat tests', () => {
  let getCat: GetCat;
  let catsClient: CatsClient;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [DatabaseModule, TypeOrmModule.forFeature([Cat])],
      providers: [CatsService, GetCat, CatsClient],
    }).compile();
    catsClient = module.get<CatsClient>(CatsClient);
    getCat = module.get<GetCat>(GetCat);
  });

  describe('getCat - Happy path', () => {
    it('Database response adapted', async () => {
      jest.spyOn(catsClient, 'getCat').mockImplementation(() => Promise.resolve(GET_CAT_RESPONSE));
      expect(await getCat.call('1')).toEqual(GET_CAT_RESPONSE_ADAPTED);
    });
    it('Id with more than 3 characters', async () => {
      const id = '1111';
      await expect(getCat.call(id)).rejects.toThrowError(DomainError);
    });
  });
});
