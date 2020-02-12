import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum GladiatorStyle {
  MURMILLO = 'MURMILLO',
  RETIARIUS = 'RETIARIUS',
  THRAEX = 'THRAEX',
  DIMACHAERUS = 'DIMACHAERUS',
}
export interface StyleModifiers {
  attackMod: number;
}

@Entity()
export class Gladiator {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 10 })
  name: string;

  @Column('text')
  bio: string;

  @Column('text')
  style: GladiatorStyle;

  @Column('int')
  level: number;

  @Column('int')
  strength: number;

  @Column('int')
  dexterity: number;

  @Column('int')
  agility: number;

  @Column('text')
  weapon: string;

  @Column('text')
  shield: string;

  @Column('text')
  head_armor: string;

  @Column('text')
  arms_armor: string;

  @Column('text')
  chest_armor: string;

  @Column('text')
  legs_armor: string;
}
