import { Injectable } from '@nestjs/common';
import { CreateCombatInputDto } from '../../../core/dto/combats/create.combat.input.dto';
import { CombatsService } from '../../../services/combats/combats.service';
import { DomainError, DomainErrors } from '../../../core/errors';

@Injectable()
export class CreateCombat {
  constructor(private readonly combatService: CombatsService) {}

  public async call(combatInput: CreateCombatInputDto) {
    CreateCombat.assureValidCombatInput(combatInput);
    return await this.combatService.createCombat(combatInput);
  }

  private static assureValidCombatInput(input: CreateCombatInputDto) {
    if (input.gladiator1 === input.gladiator2) {
      throw new DomainError(DomainErrors.SAME_GLADIATOR);
    }
  }
}
