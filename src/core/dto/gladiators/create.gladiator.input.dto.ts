import { Gladiator, GladiatorStyle } from '../../../core/entities/gladiator';
import { gladiatorStyleInit } from '../../entities/gladiator.utils';
import { DomainError, DomainErrors } from 'src/core/errors';
import { ApiProperty } from '@nestjs/swagger';

export class CreateGladiatorInputDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty({ enum: GladiatorStyle })
  readonly style: string;

  @ApiProperty()
  readonly bio: string;
}

export const toGladiator = (input: CreateGladiatorInputDto): Gladiator => {
  if (!input) {
    return null;
  }
  const gladiator = new Gladiator();

  this.style in GladiatorStyle;
  if (!(input.style in GladiatorStyle)) {
    throw new DomainError(DomainErrors.NO_SUCH_STYLE);
  }

  const styleInit = gladiatorStyleInit[input.style];
  gladiator.name = input.name;
  gladiator.bio = input.bio;
  gladiator.status = 'READY';
  gladiator.style = input.style as GladiatorStyle;
  gladiator.level = 0;
  gladiator.popularity = 0;
  gladiator.strength = styleInit.init_strength;
  gladiator.dexterity = styleInit.init_dexterity;
  gladiator.agility = styleInit.init_agility;
  gladiator.weapon = styleInit.init_weapon;
  gladiator.shield = styleInit.init_shield;
  gladiator.head_armor = styleInit.init_head_armor;
  gladiator.arms_armor = styleInit.init_arms_armor;
  gladiator.chest_armor = styleInit.init_chest_armor;
  gladiator.legs_armor = styleInit.init_legs_armor;

  return gladiator;
};
