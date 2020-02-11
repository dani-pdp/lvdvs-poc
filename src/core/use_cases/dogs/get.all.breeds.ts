import { DogsService } from '../../../services/dogs/dogs.service';
import { Injectable } from '@nestjs/common';
import { DogsOutputDto, fromDogArray } from '../../../core/dto/dogs/dogs.output.dto';

@Injectable()
export class GetAllBreeds {
  constructor(private readonly dogService: DogsService) {}

  public async call(): Promise<DogsOutputDto> {
    const dogs = await this.dogService.allBreeds();
    return fromDogArray(dogs);
  }
}
