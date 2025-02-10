import { Injectable } from '@nestjs/common';
import { CreateJokeDto } from './dto/create-joke.dto';
import { UpdateJokeDto } from './dto/update-joke.dto';
import { Joke } from './entities/joke.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class JokeService {

  constructor(@InjectRepository(Joke) private jokeRepository: Repository<Joke>) {}

  async create(createJokeDto: CreateJokeDto): Promise<Joke> {
    const joke = this.jokeRepository.create(createJokeDto);
    return this.jokeRepository.save(joke);
  }

  findAll(): Promise<Joke[]> {
    return this.jokeRepository.find();
  }

  findRandom() {
    return `This action returns a random joke`;
  }

  findOne(id: number): Promise<Joke | null> {
    return this.jokeRepository.findOneBy({id});
  }

  async update(id: number, updateJokeDto: UpdateJokeDto) {
    const existing = await this.jokeRepository.findOneBy({id});
    this.jokeRepository.merge(existing, updateJokeDto);
    return await this.jokeRepository.save(existing);
  }

  async remove(id: number): Promise<void> {
    await this.jokeRepository.delete(id);
  }
}
