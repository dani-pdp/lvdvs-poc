import { Gladiator, GladiatorStyle } from '../../../core/entities/gladiator';

export class CreateGladiatorInputDto {
  readonly id: string;
  readonly name: string;
  readonly style: string;
  readonly bio: string;
}

export const toGladiator = (input: CreateGladiatorInputDto): Gladiator => {
  if (!input) {
    return null;
  }
  const gladiator = new Gladiator();

  gladiator.name = input.name;

  gladiator.bio = input.bio;

  gladiator.style = input.style as GladiatorStyle;

  gladiator.level = 0;

  gladiator.strength = 0;

  gladiator.dexterity = 0;

  gladiator.agility = 0;

  gladiator.weapon = 'None';

  gladiator.head_armor = 'None';

  gladiator.arms_armor = 'None';

  gladiator.chest_armor = 'None';

  gladiator.legs_armor = 'None';

  return gladiator;
};
