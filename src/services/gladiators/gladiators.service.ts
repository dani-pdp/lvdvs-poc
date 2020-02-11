import { Injectable } from '@nestjs/common';
import { GladiatorsClient } from '../gladiators/client/gladiators.client';
import { Gladiator } from '../../core/entities/gladiator';

@Injectable()
export class GladiatorsService {
  constructor(private readonly client: GladiatorsClient) {}

  async getAllGladiators() {
    return this.client.getAllGladiators();
  }
  async getGladiator(id: string) {
    return this.client.getGladiator(id);
  }
  async createGladiator(gladiator: Gladiator) {
    return this.client.createGladiator(gladiator);
  }
  async modifyGladiator(Gladiator) {
    return this.client.modifyGladiator(Gladiator);
  }
  async deleteGladiator(id: string) {
    return this.client.deleteGladiator(id);
  }
}
