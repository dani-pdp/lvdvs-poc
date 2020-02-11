import { Injectable } from '@nestjs/common';
import { CatsService } from '../../../services/cats/cats.service';
import { CatInputDto } from '../../../../src/core/dto/cats/cat.input.dto';
import { DomainErrors, DomainError } from '../../../core/errors';

@Injectable()
export class CreateCat {
  constructor(private readonly catsService: CatsService) {}

  public async call(cat: CatInputDto) {
    CreateCat.assureValidCat(cat);
    return await this.catsService.createCat(cat);
  }

  private static assureValidCat(cat: CatInputDto): void {
    if (cat.bio.length < 5) {
      throw new DomainError(DomainErrors.INVALID_CAT_BIO);
    }
    if (cat.id.length > 3) {
      throw new DomainError(DomainErrors.INVALID_CAT_ID);
    }
  }
}
