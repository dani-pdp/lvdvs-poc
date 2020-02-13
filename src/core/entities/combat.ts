import { Gladiator } from './gladiator';

export class Combat {
  gladiator1: Gladiator;
  gladiator2: Gladiator;
  winner: Gladiator;
  loser: Gladiator;
  result: string;

  public simulate() {
    this.contest();
    console.log(this.winner.name + ' won against ' + this.loser.name);
    return this.winner.name;
  }
  private contest() {
    if (Math.random() >= 0.5) {
      this.winner = this.gladiator1[0];
      this.loser = this.gladiator2[0];
    } else {
      this.winner = this.gladiator2[0];
      this.loser = this.gladiator1[0];
    }
    this.result = 'FORGIVEN';
  }
}
