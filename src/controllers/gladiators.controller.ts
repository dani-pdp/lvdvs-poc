import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { GetAllGladiators } from '../core/use_cases/gladiators/get.all.gladiators';
import { GetGladiator } from '../core/use_cases/gladiators/get.gladiator';
import { CreateGladiator } from '../core/use_cases/gladiators/create.gladiator';
import { ModifyGladiator } from '../core/use_cases/gladiators/modify.gladiator';
import { DeleteGladiator } from '../core/use_cases/gladiators/delete.gladiator';
import { CreateGladiatorInputDto } from '../core/dto/gladiators/create.gladiator.input.dto';

@Controller('gladiators')
export class GladiatorsController {
  constructor(
    private readonly getAllGladiators: GetAllGladiators,
    private readonly getGladiator: GetGladiator,
    private readonly createGladiator: CreateGladiator,
    private readonly modifyGladiator: ModifyGladiator,
    private readonly deleteGladiator: DeleteGladiator,
  ) {}

  @Get()
  get_all_Gladiators() {
    return this.getAllGladiators.call();
  }

  @Get(':id')
  get_Gladiator(@Param('id') GladiatorId: string) {
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

  @Delete(':id')
  delete_Gladiator(@Param('id') GladiatorId: string) {
    return this.deleteGladiator.call(GladiatorId);
  }
}
