import { COMMON_CONFIG } from './prod';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TEST_DATABASE_CONFIG: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: ':memory:',
  synchronize: false,
  keepConnectionAlive: true,
  ...COMMON_CONFIG,
};
