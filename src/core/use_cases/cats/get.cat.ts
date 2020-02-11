import { Injectable } from '@nestjs/common';
import { CatsService } from '../../../services/cats/cats.service';
import { CatOutputDto, fromCatEntity } from '../../../core/dto/cats/cat.output.dto';
import { DomainError, DomainErrors } from '../../../core/errors';

@Injectable()
export class GetCat {
  constructor(private readonly catsService: CatsService) {}

  public async call(id: string): Promise<CatOutputDto> {
    GetCat.assureValidId(id);
    const cat = await this.catsService.getCat(id);
    return fromCatEntity(cat);
  }

  private static assureValidId(id: string): void {
    if (id.length > 3) {
      throw new DomainError(DomainErrors.INVALID_CAT_ID);
    }
  }
}
