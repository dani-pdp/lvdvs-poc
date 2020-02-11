import { Dog } from '../../../core/entities/dog';

export class BreedListAdapter {
  public static toListandNumber(response) {
    let dogsList: Dog[] = [];

    Object.keys(response.message).forEach(key => {
      dogsList.push(new Dog(key));
    });

    return dogsList;
  }
}
