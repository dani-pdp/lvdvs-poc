import { ConfigService } from '../../../config.service';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const COMMON_CONFIG = {
  entities: [
    __dirname + '/../../../core/entities/cat.{ts,js}',
  ] /*
  migrations: [__dirname + '/../migrations/*.{ts,js}'],
  cli: {
    // This param is relative to the directory where the migration
    // is created/executed.
    // As this allways be from the project src root, we set the
    // relative path from there.
    migrationsDir: 'services/database/migrations',
  },*/,
};

export const PRODUCTION_DATABASE_CONFIG: TypeOrmModuleOptions = {
  type: 'mysql',
  host: ConfigService.get('DB_HOST'),
  port: parseInt(ConfigService.get('DB_PORT'), 10),
  username: ConfigService.get('DB_USERNAME'),
  password: ConfigService.get('DB_PASSWORD'),
  database: ConfigService.get('DB_DATABASE'),
  ...COMMON_CONFIG,
};
