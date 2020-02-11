import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Gladiator } from '../../../core/entities/gladiator';
import { CreateGladiatorInputDto } from '../../../core/dto/gladiators/create.gladiator.input.dto';

@Injectable()
export class GladiatorsClient {
  constructor(@InjectRepository(Gladiator) private gladiatorsRepository: Repository<Gladiator>) {}

  async getAllGladiators(): Promise<any> {
    return await this.gladiatorsRepository.find({
      select: ['id', 'name', 'style', 'bio'],
    });
  }

  async getGladiator(id: string): Promise<any> {
    return await this.gladiatorsRepository.find({
      select: ['id', 'name', 'style', 'bio'],
      where: [{ id: id }],
    });
  }

  async createGladiator(gladiator: Gladiator) {
    return await this.gladiatorsRepository.save(gladiator);
  }

  async modifyGladiator(gladiator: any) {
    return await this.gladiatorsRepository.save(gladiator);
  }

  async deleteGladiator(id: string) {
    return await this.gladiatorsRepository.delete(id);
  }
}
