import { Injectable } from '@nestjs/common';
import { GladiatorsService } from '../../../services/gladiators/gladiators.service';
import { GladiatorInputDto } from '../../dto/gladiators/gladiator.input.dto';

@Injectable()
export class CreateGladiator {
  constructor(private readonly gladiatorsService: GladiatorsService) {}

  public async call(gladiator: GladiatorInputDto) {
    return await this.gladiatorsService.createGladiator(gladiator);
  }
}
