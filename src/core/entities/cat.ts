import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cat {
    
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 500 })
  name: string;

  @Column('int')
  years: number;

  @Column('text')
  bio: string;

}