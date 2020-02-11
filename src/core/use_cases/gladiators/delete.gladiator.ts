import { Injectable } from '@nestjs/common';
import { GladiatorsService } from '../../../services/gladiators/gladiators.service';

@Injectable()
export class DeleteGladiator {
  constructor(private readonly gladiatorsService: GladiatorsService) {}

  public async call(id: string) {
    return await this.gladiatorsService.deleteGladiator(id);
  }
}
