import { Injectable } from '@nestjs/common';
import { GladiatorsService } from '../../../services/gladiators/gladiators.service';

@Injectable()
export class RestoreAllGladiatorStatus {
  constructor(private readonly gladiatorsService: GladiatorsService) {}

  public async call() {
    return await this.gladiatorsService.restoreAllGladiatorStatus();
  }
}
