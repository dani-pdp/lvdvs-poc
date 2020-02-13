import { Injectable } from '@nestjs/common';
import { GladiatorsService } from '../../../services/gladiators/gladiators.service';
import { GladiatorOutputDto, fromGladiatortEntity } from '../../dto/gladiators/gladiator.output.dto';

@Injectable()
export class GetGladiator {
  constructor(private readonly gladiatorsService: GladiatorsService) {}

  public async call(name: string): Promise<GladiatorOutputDto> {
    const gladiator = await this.gladiatorsService.getGladiator(name);
    return fromGladiatortEntity(gladiator);
  }
}
