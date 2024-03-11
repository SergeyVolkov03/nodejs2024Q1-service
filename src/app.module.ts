import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { ArtistModule } from './artists/artist.module';
import { AlbumModule } from './albums/album.module';
import { TrackModule } from './tracks/track.module';
import { FavoriteModule } from './favorites/favorite.module';

@Module({
  imports: [UserModule, ArtistModule, AlbumModule, TrackModule, FavoriteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
