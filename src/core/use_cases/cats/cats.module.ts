import { Module } from '@nestjs/common';
import { CatsServiceModule } from '../../../services/cats/cats.service.module';
import { GetAllCats } from './get.all.cats';
import { GetCat } from './get.cat';
import { CreateCat } from './create.cat';
import { ModifyCat } from './modify.cat';
import { DeleteCat } from './delete.cat';

@Module({
  providers: [GetAllCats, GetCat, CreateCat, ModifyCat, DeleteCat],
  imports: [CatsServiceModule],
  exports: [GetAllCats, GetCat, CreateCat, ModifyCat, DeleteCat],
})
export class CatsModule {}
