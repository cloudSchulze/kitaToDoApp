import { Injectable } from '@nestjs/common';
import { createConnection } from 'typeorm';

@Injectable()
export class AppService {
  async initDatabase() {
    const connection = await createConnection();
    connection.query(`CREATE SCHEMA IF NOT EXISTS ${process.env.DB_NAME}`);
    connection.close();
  }
}
