import 'dotenv/config';
import { join } from 'path';
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
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: [join(__dirname, './db/migrations/', '*.js')],
  synchronize: false,
  autoLoadEntities: true,
} as DataSourceOptions;
