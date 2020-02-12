import { Injectable } from '@nestjs/common';
import { CreateCombatInputDto } from '../../../core/dto/combats/create.combat.input.dto';
import { CombatsService } from 'src/services/combats/combats.service';

@Injectable()
export class CreateCombat {
  constructor(private readonly combatService: CombatsService) {}

  public async call(combatInput: CreateCombatInputDto) {
    return await this.combatService.createCombat(combatInput);
  }
}
