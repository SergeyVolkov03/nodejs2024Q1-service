import { join } from 'path';
import 'dotenv/config';
import { DataSourceOptions } from 'typeorm';

const {
  POSTGRES_HOST,
  POSTGRES_USER,
  POSTGRES_DB,
  POSTGRESS_PASSWORD,
  POSTGRESS_PORT,
} = process.env;

export const config = {
  type: 'postgres',
  host: POSTGRES_HOST,
  port: +POSTGRESS_PORT,
  username: POSTGRES_USER,
  password: POSTGRESS_PASSWORD,
  database: POSTGRES_DB,
  entities: [join(__dirname, '/**/*.entity{.ts,.js}')],
  migrations: [join(__dirname, './db/migrations/*.ts')],
  synchronize: false,
  autoLoadEntities: true,
} as DataSourceOptions;
