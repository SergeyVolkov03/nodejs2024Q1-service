import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Favorites } from './entities/favorites.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FavoriteService {
  constructor(
    @InjectRepository(Favorites)
    private readonly favoritesRepository: Repository<Favorites>,
  ) {}

  async onModuleInit() {
    const favorites = await this.favoritesRepository.find();
    if (favorites.length) {
      return;
    }
    await this.favoritesRepository.save({});
  }

  async getAllFavorites() {
    return await this.favoritesRepository.find();
  }
}
