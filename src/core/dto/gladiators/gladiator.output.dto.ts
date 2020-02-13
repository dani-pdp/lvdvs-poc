import { Gladiator } from '../../../core/entities/gladiator';

export class GladiatorOutputDto {
  readonly name: string;
  readonly level: number;
  readonly popularity: number;
  readonly bio: string;
  readonly status: string;
  readonly style: string;
  readonly strength: number;
  readonly dexterity: number;
  readonly agility: number;
}
export const fromGladiatortEntity = (gladiator: Gladiator) => {
  const { name, level, popularity, bio, status, style, strength, dexterity, agility } = gladiator;
  return {
    name,
    level,
    popularity,
    bio,
    status,
    style,
    strength,
    dexterity,
    agility,
  };
};
