import { Injectable } from '@nestjs/common';
import { GladiatorsService } from '../../../services/gladiators/gladiators.service';
import { CreateGladiatorInputDto, toGladiator } from '../../dto/gladiators/create.gladiator.input.dto';

@Injectable()
export class CreateGladiator {
  constructor(private readonly gladiatorsService: GladiatorsService) {}

  public async call(gladiatorInput: CreateGladiatorInputDto) {
    const gladiator = toGladiator(gladiatorInput);
    return await this.gladiatorsService.createGladiator(gladiator);
  }
}
