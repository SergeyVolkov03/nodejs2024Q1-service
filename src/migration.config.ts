import { DataSource } from 'typeorm';
import { config } from './orm.config';

const datasource = new DataSource(config);
datasource.initialize();
export default datasource;
