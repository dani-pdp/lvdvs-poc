import { Injectable } from '@nestjs/common';
import { GladiatorsClient } from '../gladiators/client/gladiators.client';
import { Gladiator } from '../../core/entities/gladiator';

@Injectable()
export class GladiatorsService {
  constructor(private readonly client: GladiatorsClient) {}

  async getAllGladiators() {
    return this.client.getAllGladiators();
  }
  async getGladiator(name: string) {
    return this.client.getGladiator(name);
  }
  async createGladiator(gladiator: Gladiator) {
    return this.client.createGladiator(gladiator);
  }
  async modifyGladiator(Gladiator) {
    return this.client.modifyGladiator(Gladiator);
  }
  async deleteGladiator(name: string) {
    return this.client.deleteGladiator(name);
  }
  async restoreGladiatorStatus(name: string) {
    return this.client.restoreGladiatorStatus(name);
  }
}
