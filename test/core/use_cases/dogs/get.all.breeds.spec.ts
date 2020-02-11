import { Test } from '@nestjs/testing';
import { GetAllBreeds } from '../../../../src/core/use_cases/dogs/get.all.breeds';
import { DogsService } from '../../../../src/services/dogs/dogs.service';
import { LIST_OF_ALL_BREEDS } from './_fixtures_/get.all.breeds';
import { API_RESPONSE_ALL_BREEDS } from '../../../services/dogs/client/_fixtures_/dogs.client';
import { DogsClient } from '../../../../src/services/dogs/client/dogs.client';

describe('GetAllBreeds', () => {
    let getAllBreeds: GetAllBreeds;
    let dogsService: DogsService;
    let dogsClient: DogsClient;

    beforeAll(async () => {
        const module = await Test.createTestingModule({
            imports: [],
            providers: [GetAllBreeds,  DogsService,   DogsClient],
        }).compile();
        dogsService = module.get<DogsService>(DogsService);
        dogsClient = module.get<DogsClient>(DogsClient);
        getAllBreeds = module.get<GetAllBreeds>(GetAllBreeds);
 
    });

    describe('getAllBreeds - Happy path', () => {
        it('API returns list of breeds', async () => {
            jest.spyOn(dogsClient, 'get').mockImplementation(() => Promise.resolve(API_RESPONSE_ALL_BREEDS));
            expect(await getAllBreeds.call()).toEqual(LIST_OF_ALL_BREEDS);
        });
    });
});
