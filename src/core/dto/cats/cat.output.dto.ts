import { Cat } from '../../../core/entities/cat';

export class CatOutputDto {
  readonly id: string;
  readonly name: string;
  readonly years: number;
  readonly binaryYears: number;
}
export const fromCatEntity = (cat: Cat) => {
  const { id, name, years } = cat[0];
  const binaryYears = years.toString(2);
  return {
    id: id,
    name: name,
    years: years,
    binaryYears: parseInt(binaryYears),
  };
};
