import { Gladiator } from './gladiator';

export class Combat {
  gladiator1: Gladiator;
  gladiator2: Gladiator;
  winner: Gladiator;
  loser: Gladiator;
  result: string;

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
