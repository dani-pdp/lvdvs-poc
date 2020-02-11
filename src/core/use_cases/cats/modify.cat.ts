import { Injectable } from '@nestjs/common';
import { CatsService } from '../../../services/cats/cats.service';
import { CatInputDto } from '../../../../src/core/dto/cats/cat.input.dto';

@Injectable()
export class ModifyCat {
  constructor(private readonly catsService: CatsService) {}

  public async call(cat: CatInputDto) {
    return await this.catsService.modifyCat(cat);
  }
}
