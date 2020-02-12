import { Controller, Post, Body } from '@nestjs/common';
import { CreateCombat } from '../core/use_cases/combat/create.combat';
import { CreateCombatInputDto } from 'src/core/dto/combats/create.combat.input.dto';

@Controller('combats')
export class CombatsController {
  constructor(private readonly createCombat: CreateCombat) {}

  @Post()
  create_Gladiator(@Body() CombatDto: CreateCombatInputDto) {
    return this.createCombat.call(CombatDto);
  }
}
