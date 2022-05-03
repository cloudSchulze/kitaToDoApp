const path = require('path');
const fs = require('fs-extra');
const dotenv = require('dotenv');
// import * as path from 'path';
// import * as fs from 'fs-extra';
// import { ConnectionOptions } from 'typeorm';
// import * as dotenv from 'dotenv';

console.log(`Reading environment variables from file ...`);
dotenv.config();

const dbConfig = {
  type: 'mysql',
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: Number.parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  entities: ['**/*.entity{.ts,.js}'],
  migrationsTableName: 'migration',
  migrations: ['src/migration/*.ts'],
  cli: {
    migrationsDir: 'src/migration',
  },
  charset: 'utf8mb4_unicode_ci',
  extra: {
    ssl: true,
  },
};

console.log(
  `Writing TypeORM config to ${path.join(process.cwd(), 'ormconfig.json')} ...`,
);
fs.writeFileSync(
  path.join(process.cwd(), 'ormconfig.json'),
  JSON.stringify(dbConfig, null, 2),
);
console.log('DONE');
