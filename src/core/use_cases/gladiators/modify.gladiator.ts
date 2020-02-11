import { Injectable } from '@nestjs/common';
import { GladiatorsService } from '../../../services/gladiators/gladiators.service';

@Injectable()
export class ModifyGladiator {
  constructor(private readonly gladiatorsService: GladiatorsService) {}

  public async call(gladiator: any) {
    return await this.gladiatorsService.modifyGladiator(gladiator);
  }
}
