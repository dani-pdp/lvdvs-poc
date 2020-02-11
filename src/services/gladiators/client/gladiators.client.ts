import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Gladiator } from '../../../core/entities/gladiator';
import { GladiatorInputDto } from 'src/core/dto/gladiators/gladiator.input.dto';

@Injectable()
export class GladiatorsClient {
  constructor(@InjectRepository(Gladiator) private gladiatorsRepository: Repository<Gladiator>) {}

  async getAllGladiators(): Promise<any> {
    return await this.gladiatorsRepository.find({
      select: ['id', 'name', 'years', 'bio'],
    });
  }

  async getGladiator(id: string): Promise<any> {
    return await this.gladiatorsRepository.find({
      select: ['id', 'name', 'years', 'bio'],
      where: [{ id: id }],
    });
  }

  async createGladiator(Gladiator: GladiatorInputDto) {
    return await this.gladiatorsRepository.save(Gladiator);
  }

  async modifyGladiator(Gladiator: GladiatorInputDto) {
    return await this.gladiatorsRepository.save(Gladiator);
  }

  async deleteGladiator(id: string) {
    return await this.gladiatorsRepository.delete(id);
  }
}
