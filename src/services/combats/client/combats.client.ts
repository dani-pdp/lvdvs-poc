import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Gladiator } from '../../../core/entities/gladiator';

@Injectable()
export class CombatsClient {
  constructor(@InjectRepository(Gladiator) private gladiatorsRepository: Repository<Gladiator>) {}

  async getGladiator(id: string): Promise<any> {
    return await this.gladiatorsRepository.find({
      where: [{ id: id }],
    });
  }
}
