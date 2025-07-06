import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config();
console.log('COHERE API', process.env.COHERE_API_KEY);


@Module({
  imports: [
     /*  TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [__dirname + '/**.entity{.ts,.js}'],
      synchronize: true, // ❗ Solo en desarrollo
    }), */
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
export { Module };

