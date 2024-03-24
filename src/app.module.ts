import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { ArtistModule } from './artists/artist.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlbumModule } from './albums/album.module';
import { TrackModule } from './tracks/track.module';
import { config } from './orm.config';

@Module({
  imports: [
    UserModule,
    ArtistModule,
    AlbumModule,
    TrackModule,
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '../.env' }),
    TypeOrmModule.forRoot(config),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
