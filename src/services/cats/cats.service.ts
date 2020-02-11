import { Injectable } from '@nestjs/common';
import { CatsClient } from '../../services/cats/client/cats.client';
import { CatInputDto } from '../../core/dto/cats/cat.input.dto';

@Injectable()
export class CatsService {
  constructor(private readonly client: CatsClient) {}

  async getAllCats() {
    return this.client.getAllCats();
  }
  async getCat(id: string) {
    return this.client.getCat(id);
  }
  async createCat(cat: CatInputDto) {
    return this.client.createCat(cat);
  }
  async modifyCat(cat: CatInputDto) {
    return this.client.modifyCat(cat);
  }
  async deleteCat(id: string) {
    return this.client.deleteCat(id);
  }
}
