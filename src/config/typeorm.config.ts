import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: ((process.env.DB_PORT as unknown) as number) || 5432,
  username: process.env.POSTGRES_USER || 'krishna',
  password: process.env.POSTGRES_PASSWORD || '2029',
  database: process.env.POSTGRES_DB || 'eegzam',
  entities: [__dirname + '/../**/*entity.{js,ts}'],
  synchronize: true,
  cache: false,
};
