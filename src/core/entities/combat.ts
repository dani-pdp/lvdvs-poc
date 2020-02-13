import { Gladiator } from './gladiator';
import { DomainErrors, DomainError } from '../errors';

export class Combat {
  gladiator1: Gladiator;
  gladiator2: Gladiator;
  winner: Gladiator;
  loser: Gladiator;
  result: string;

  constructor(gladiator1: Gladiator, gladiator2: Gladiator) {
    this.gladiator1 = gladiator1;
    this.gladiator2 = gladiator2;
  }

  public assureValid() {
    if (this.gladiator1.status != 'READY' || this.gladiator2.status != 'READY') {
      throw new DomainError(DomainErrors.INVALID_COMBAT);
    }
  }
  public simulate() {
    this.contest();
    return { winner: this.winner, loser: this.loser, result: this.result };
  }

  private contest() {
    if (Math.random() >= 0.5) {
      this.winner = this.gladiator1;
      this.loser = this.gladiator2;
    } else {
      this.winner = this.gladiator2;
      this.loser = this.gladiator1;
    }

    if (Math.random() >= 0.2) {
      this.result = 'FORGIVEN';
    } else {
      this.result = 'KILLED';
    }
  }
}
