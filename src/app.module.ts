import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ControllersModule } from './controllers/controllers.module';
@Module({
  imports: [ControllersModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
