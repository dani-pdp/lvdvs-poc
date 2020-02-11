import { DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '../../config.service';
import { TEST_DATABASE_CONFIG } from './config/test';
import { PRODUCTION_DATABASE_CONFIG } from './config/prod';

const TEST_ENV = 'test';

export class DatabaseConfig {
  static forRoot(): DynamicModule {
    const config = ConfigService.get('NODE_ENV') === TEST_ENV ? TEST_DATABASE_CONFIG : PRODUCTION_DATABASE_CONFIG;
    return TypeOrmModule.forRoot(config);
  }
}
