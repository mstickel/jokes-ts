import { Module } from '@nestjs/common';
import { JokeService } from './joke.service';
import { JokeController } from './joke.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Joke } from './entities/joke.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Joke])],
  controllers: [JokeController],
  providers: [JokeService]
})
export class JokeModule {}
