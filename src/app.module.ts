import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JokeModule } from './joke/joke.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Joke } from './joke/entities/joke.entity';

@Module({
  imports: [JokeModule,
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE,
      host: 'localhost',
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
