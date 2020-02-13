import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Gladiator } from '../../../core/entities/gladiator';

@Injectable()
export class GladiatorsClient {
  constructor(@InjectRepository(Gladiator) private gladiatorsRepository: Repository<Gladiator>) {}

  async getAllGladiators(): Promise<any> {
    return await this.gladiatorsRepository.find({
      select: ['name', 'style', 'bio', 'level', 'status', 'popularity'],
    });
  }

  async getGladiator(name: string): Promise<any> {
    return await this.gladiatorsRepository.findOne(name);
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

  async restoreGladiatorStatus(name: string) {
    let gladiator = await this.gladiatorsRepository.findOne(name);
    gladiator.status = 'READY';
    return await this.gladiatorsRepository.save(gladiator);
  }

  async restoreAllGladiatorsStatus() {
    const gladiators = await this.getAllGladiators();
    gladiators.map(gladiator => {
      gladiator.status = 'READY';
      this.gladiatorsRepository.save(gladiator);
    });
    return 'All status restored';
  }
}
