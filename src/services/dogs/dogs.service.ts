import { Injectable } from '@nestjs/common';
import { BreedListAdapter } from './adapters/breed.list.adapter';
import { DogsClient } from './client/dogs.client';
import { Dog } from '../../core/entities/dog';

@Injectable()
export class DogsService {
  constructor(private readonly client: DogsClient) {}

  async allBreeds(): Promise<Dog[]> {
    const response = await this.client.get('/breeds/list/all');
    const adapted = BreedListAdapter.toListandNumber(response);
    return adapted;
  }

  async subBreedList(breed: string) {
    const response = await this.client.get('/breed/' + breed + '/list');
    return response;
  }

  async randomImage() {
    const response = await this.client.get('/breeds/image/random');
    return response;
  }

  async randomBreedImage(breed: string) {
    const response = await this.client.get('/breed/' + breed + '/images/random');
    return response;
  }

  async breedImages(breed: string) {
    const response = await this.client.get('/breed/' + breed + '/images');
    return response;
  }
}
