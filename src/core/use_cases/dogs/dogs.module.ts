import { Module } from '@nestjs/common';
import { GetAllBreeds } from './get.all.breeds';
import { GetSubbreedsList } from './get.subreeds.list';
import { GetRandomImage } from './get.random.image';
import { GetRandomBreedImage } from './get.random.breed.image';
import { GetBreedImages } from './get.breed.images';
import { DogsServiceModule } from '../../../services/dogs/dogs.service.module';

@Module({
    providers: [GetAllBreeds, GetSubbreedsList, GetRandomImage, GetRandomBreedImage, GetBreedImages],
    imports: [DogsServiceModule],
    exports: [GetAllBreeds, GetSubbreedsList, GetRandomImage, GetRandomBreedImage, GetBreedImages],
})
export class DogsModule { }