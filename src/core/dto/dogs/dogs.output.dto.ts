import { Dog } from '../../../../src/core/entities/dog';

export class DogsOutputDto {
  list: string[];
  total: number;
}
export const fromDogArray = (dogs: Dog[]): DogsOutputDto => {
  let breedNamesList: string[] = [];

  Object.keys(dogs).forEach(Element => {
    breedNamesList.push(dogs[Element].breed);
  });

  const adapted = {
    list: breedNamesList,
    total: breedNamesList.length,
  };

  return adapted;
};
