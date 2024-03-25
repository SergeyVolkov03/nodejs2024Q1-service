import { Module } from '@nestjs/common';
import { FavoriteController } from './favorite.controller';
import { FavoriteService } from './favorite.service';
import { Favorites } from './entities/favorites.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Artist } from 'src/artists/entities/artist.entity';
import { Album } from 'src/albums/entities/album.entity';
import { Track } from 'src/tracks/entities/track.entity';

@Module({
  controllers: [FavoriteController],
  providers: [FavoriteService],
  imports: [TypeOrmModule.forFeature([Favorites, Artist, Album, Track])],
})
export class FavoriteModule {}
