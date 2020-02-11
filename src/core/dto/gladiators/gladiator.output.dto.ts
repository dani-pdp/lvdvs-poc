import { Gladiator } from '../../../core/entities/gladiator';

export class GladiatorOutputDto {
  readonly id: string;
  readonly name: string;
  readonly years: number;
  readonly binaryYears: number;
}
export const fromGladiatortEntity = (gladiator: Gladiator) => {
  const { id, name, years } = gladiator[0];
  const binaryYears = years.toString(2);
  return {
    id: id,
    name: name,
    years: years,
    binaryYears: parseInt(binaryYears),
  };
};
