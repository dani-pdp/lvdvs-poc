import { Controller, Get, Param } from '@nestjs/common';
import { GetAllBreeds } from '../core/use_cases/dogs/get.all.breeds';
import { GetSubbreedsList } from '../core/use_cases/dogs/get.subreeds.list';
import { GetRandomImage } from '../core/use_cases/dogs/get.random.image';
import { GetRandomBreedImage } from '../core/use_cases/dogs/get.random.breed.image';
import { GetBreedImages } from '../core/use_cases/dogs/get.breed.images';


@Controller('dogs')
export class DogsController {

  constructor(
    private readonly getAllBreeds: GetAllBreeds,
    private readonly getSubbreedList: GetSubbreedsList,
    private readonly getRandomImage: GetRandomImage,
    private readonly getRandomBreedImage: GetRandomBreedImage,
    private readonly getBreedImages: GetBreedImages,
  ) { }

  @Get()
  getallBreeds() {
    return this.getAllBreeds.call();
  }

  @Get('/:breed')
  getSubBreedList(@Param('breed') breed: string) {
    return this.getSubbreedList.call(breed);
  }

  @Get('/img/rnd')
  getRndImage() {
    return this.getRandomImage.call();
  }

  @Get('/img/rnd/:breed')
  getRndBreedImage(@Param('breed') breed: string) {
    return this.getRandomBreedImage.call(breed);
  }

  @Get('/img/:breed')
  getBreedImgs(@Param('breed') breed: string) {
    return this.getBreedImages.call(breed);
  }

}