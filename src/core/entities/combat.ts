import { Gladiator } from './gladiator';

export class Combat {
  gladiator1: Gladiator;
  gladiator2: Gladiator;

  public simulate() {
    return this.gladiator1[0].name + ' won!';
  }
}
