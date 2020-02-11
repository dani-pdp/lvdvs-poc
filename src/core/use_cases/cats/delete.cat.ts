import { Injectable } from '@nestjs/common';
import { CatsService } from '../../../services/cats/cats.service';
@Injectable()
export class DeleteCat {
  constructor(private readonly catsService: CatsService) {}

  public async call(id: string) {
    return await this.catsService.deleteCat(id);
  }
}
