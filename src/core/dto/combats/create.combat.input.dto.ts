import { Combat } from '../../../core/entities/combat';
import { GladiatorsService } from 'src/services/gladiators/gladiators.service';
import { GetGladiator } from 'src/core/use_cases/gladiators/get.gladiator';

export class CreateCombatInputDto {
  readonly gladiator1: string;
  readonly gladiator2: string;
}
