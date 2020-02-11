import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { GetAllCats } from '../core/use_cases/cats/get.all.cats';
import { GetCat } from '../core/use_cases/cats/get.cat';
import { CreateCat } from '../core/use_cases/cats/create.cat';
import { ModifyCat } from '../core/use_cases/cats/modify.cat';
import { DeleteCat } from '../core/use_cases/cats/delete.cat';
import { CatInputDto } from '../core/dto/cats/cat.input.dto';

@Controller('cats')
export class CatsController {
  constructor(
    private readonly getAllCats: GetAllCats,
    private readonly getCat: GetCat,
    private readonly createCat: CreateCat,
    private readonly modifyCat: ModifyCat,
    private readonly deleteCat: DeleteCat,
  ) {}

  @Get()
  get_all_Cats() {
    return this.getAllCats.call();
  }

  @Get(':id')
  get_Cat(@Param('id') catId: string) {
    return this.getCat.call(catId);
  }

  @Post()
  creat_Cat(@Body() catDto: CatInputDto) {
    return this.createCat.call(catDto);
  }

  @Put()
  modify(@Body() catDto: CatInputDto) {
    return this.modifyCat.call(catDto);
  }

  @Delete(':id')
  delete_Cat(@Param('id') catId: string) {
    return this.deleteCat.call(catId);
  }
}
