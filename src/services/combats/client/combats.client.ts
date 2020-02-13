import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Gladiator } from '../../../core/entities/gladiator';
import { resultConsequence } from '../../../core/entities/gladiator.utils';

@Injectable()
export class CombatsClient {
  constructor(@InjectRepository(Gladiator) private gladiatorsRepository: Repository<Gladiator>) {}

  async getGladiator(name: string): Promise<any> {
    return await this.gladiatorsRepository.findOne(name);
  }

  async setGladiatorStatus(gladiator: Gladiator, result: string): Promise<any> {
    gladiator.status = resultConsequence[result];
    return await this.gladiatorsRepository.save(gladiator);
  }
}
