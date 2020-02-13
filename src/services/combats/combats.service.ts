import { Injectable } from '@nestjs/common';
import { CombatsClient } from '../combats/client/combats.client';
import { CreateCombatInputDto } from '../../core/dto/combats/create.combat.input.dto';
import { Combat } from '../../core/entities/combat';

@Injectable()
export class CombatsService {
  constructor(private readonly client: CombatsClient) {}

  async createCombat(combatInput: CreateCombatInputDto) {
    const combat = new Combat(
      await this.client.getGladiator(combatInput.gladiator1),
      await this.client.getGladiator(combatInput.gladiator2),
    );
    combat.assureValid();

    const results = combat.simulate();
    this.client.setGladiatorStatus(results.loser, results.result);

    return results.winner.name + ' won against ' + results.loser.name + '(' + results.result + ')';
  }
}
