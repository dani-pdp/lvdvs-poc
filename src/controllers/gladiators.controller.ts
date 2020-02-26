import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { GetAllGladiators } from '../core/use_cases/gladiators/get.all.gladiators';
import { GetGladiator } from '../core/use_cases/gladiators/get.gladiator';
import { CreateGladiator } from '../core/use_cases/gladiators/create.gladiator';
import { ModifyGladiator } from '../core/use_cases/gladiators/modify.gladiator';
import { DeleteGladiator } from '../core/use_cases/gladiators/delete.gladiator';
import { RestoreGladiatorStatus } from '../core/use_cases/gladiators/restore.gladiator.status';
import { CreateGladiatorInputDto } from '../core/dto/gladiators/create.gladiator.input.dto';
import { RestoreAllGladiatorStatus } from '../core/use_cases/gladiators/restore.all.gladiators.status';

@Controller('gladiators')
export class GladiatorsController {
  constructor(
    private readonly getAllGladiators: GetAllGladiators,
    private readonly getGladiator: GetGladiator,
    private readonly createGladiator: CreateGladiator,
    private readonly modifyGladiator: ModifyGladiator,
    private readonly deleteGladiator: DeleteGladiator,
    private readonly restoreGladiatorStatus: RestoreGladiatorStatus,
    private readonly restoreAllGladiatorStatus: RestoreAllGladiatorStatus,
  ) {}

  @Get()
  get_all_Gladiators() {
    return this.getAllGladiators.call();
  }

  @Get('/:name')
  get_Gladiator(@Param('name') GladiatorId: string) {
    console.log('getGladiator');
    return this.getGladiator.call(GladiatorId);
  }

  @Post()
  create_Gladiator(@Body() GladiatorDto: CreateGladiatorInputDto) {
    return this.createGladiator.call(GladiatorDto);
  }

  @Put()
  modify(@Body() GladiatorDto: CreateGladiatorInputDto) {
    return this.modifyGladiator.call(GladiatorDto);
  }

  @Delete(':name')
  delete_Gladiator(@Param('name') GladiatorId: string) {
    return this.deleteGladiator.call(GladiatorId);
  }

  @Get('/medicvs/restore/:name')
  restore_Gladiator_Status(@Param('name') GladiatorId: string) {
    console.log('ttt');
    return this.restoreGladiatorStatus.call(GladiatorId);
  }

  @Get('/medicvs/restoreall')
  restore_All_Gladiator_Status() {
    console.log('restoreando');
    return this.restoreAllGladiatorStatus.call();
  }
}
