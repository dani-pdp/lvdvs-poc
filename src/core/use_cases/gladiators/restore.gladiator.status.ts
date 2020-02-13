import { Injectable } from '@nestjs/common';
import { GladiatorsService } from '../../../services/gladiators/gladiators.service';

@Injectable()
export class RestoreGladiatorStatus {
  constructor(private readonly gladiatorsService: GladiatorsService) {}

  public async call(name: string) {
    return await this.gladiatorsService.restoreGladiatorStatus(name);
  }
}
