import { Injectable } from '@nestjs/common';
import { GladiatorsClient } from '../gladiators/client/gladiators.client';
import { GladiatorInputDto } from '../../core/dto/gladiators/gladiator.input.dto';

@Injectable()
export class GladiatorsService {
  constructor(private readonly client: GladiatorsClient) {}

  async getAllGladiators() {
    return this.client.getAllGladiators();
  }
  async getGladiator(id: string) {
    return this.client.getGladiator(id);
  }
  async createGladiator(Gladiator: GladiatorInputDto) {
    return this.client.createGladiator(Gladiator);
  }
  async modifyGladiator(Gladiator: GladiatorInputDto) {
    return this.client.modifyGladiator(Gladiator);
  }
  async deleteGladiator(id: string) {
    return this.client.deleteGladiator(id);
  }
}
