import { Injectable } from '@nestjs/common';
import { CatsService } from '../../../services/cats/cats.service';

@Injectable()
export class GetAllCats {
  constructor(private readonly catsService: CatsService) {}

  public async call() {
    return await this.catsService.getAllCats();
  }
}
