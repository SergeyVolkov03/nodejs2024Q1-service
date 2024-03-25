import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Favorites } from './entities/favorites.entity';
import { Repository } from 'typeorm';
import { Artist } from 'src/artists/entities/artist.entity';
import { Album } from 'src/albums/entities/album.entity';
import { Track } from 'src/tracks/entities/track.entity';

@Injectable()
export class FavoriteService {
  constructor(
    @InjectRepository(Favorites)
    private readonly favoritesRepository: Repository<Favorites>,
    @InjectRepository(Artist)
    private readonly artistRepository: Repository<Artist>,
    @InjectRepository(Album)
    private readonly albumRepository: Repository<Album>,
    @InjectRepository(Track)
    private readonly trackRepository: Repository<Track>,
  ) {}

  async onModuleInit() {
    const favorites = await this.favoritesRepository.find();
    if (favorites.length) {
      return;
    }
    await this.favoritesRepository.save({});
  }

  async getAllFavorites() {
    const [{ artists, albums, tracks }] = await this.favoritesRepository.find({
      relations: {
        artists: true,
        albums: true,
        tracks: true,
      },
    });
    const artistsResponse = artists.map((artist) => {
      return artist.id;
    });
    const albumResponse = albums.map((album) => {
      return album.id;
    });
    const trackResponse = tracks.map((track) => {
      return track.id;
    });
    return {
      artists: artistsResponse,
      albums: albumResponse,
      tracks: trackResponse,
    };
  }

  async addArtistToFavorites(artistId: string) {
    const [{ id, artists }] = await this.favoritesRepository.find({
      relations: { artists: true },
    });
    const artist = await this.artistRepository.findOne({
      where: { id: artistId },
    });
    await this.favoritesRepository.save({
      id,
      artists: [...artists, artist],
    });
  }

  async deleteArtistFromFavorites(artistId: string) {
    const [{ id, artists }] = await this.favoritesRepository.find({
      relations: { artists: true },
    });
    await this.artistRepository.findOne({
      where: { id: artistId },
    });
    await this.favoritesRepository.save({
      id,
      artists: [...artists.filter((artist) => artist.id !== artistId)],
    });
  }

  async addAlbumToFavorites(albumId: string) {
    const [{ id, albums }] = await this.favoritesRepository.find({
      relations: { albums: true },
    });
    const album = await this.albumRepository.findOne({
      where: { id: albumId },
    });
    await this.favoritesRepository.save({
      id,
      albums: [...albums, album],
    });
  }

  async deleteAlbumFromFavorites(albumId: string) {
    const [{ id, albums }] = await this.favoritesRepository.find({
      relations: { albums: true },
    });
    await this.albumRepository.findOne({
      where: { id: albumId },
    });
    await this.favoritesRepository.save({
      id,
      albums: [...albums.filter((album) => album.id !== albumId)],
    });
  }

  async addTrackToFavorites(trackId: string) {
    const [{ id, tracks }] = await this.favoritesRepository.find({
      relations: { tracks: true },
    });
    const track = await this.trackRepository.findOne({
      where: { id: trackId },
    });
    await this.favoritesRepository.save({
      id,
      tracks: [...tracks, track],
    });
  }

  async deleteTrackFromFavorites(trackId: string) {
    const [{ id, tracks }] = await this.favoritesRepository.find({
      relations: { tracks: true },
    });
    await this.trackRepository.findOne({
      where: { id: trackId },
    });
    await this.favoritesRepository.save({
      id,
      tracks: [...tracks.filter((track) => track.id !== trackId)],
    });
  }
}
