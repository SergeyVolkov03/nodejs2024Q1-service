import { Injectable, NotFoundException } from '@nestjs/common';
import { Artist } from './types/artist.type';
import { CreateArtistDTO } from './dto/create-artist-dto';
import { v4 } from 'uuid';
import { UpdateArtistDTO } from './dto/update-artist-dto';

@Injectable()
export class ArtistService {
  artists: Artist[] = [];

  getArtists() {
    return this.artists;
  }

  createArtist(dto: CreateArtistDTO) {
    const artist = {
      ...dto,
      id: v4(),
    };
    this.artists.push(artist);
    return artist;
  }

  getArtistById(id: string) {
    const artist = this.artists.find((artist) => artist.id === id);
    if (!artist) {
      throw new NotFoundException('Artist not found');
    }
    return artist;
  }

  updateArtistById(id: string, dto: UpdateArtistDTO) {
    const artist = this.getArtistById(id);
    const updatedArtist = {
      ...artist,
      ...dto,
    };
    this.artists = this.artists.map((artist) =>
      artist.id === id ? updatedArtist : artist,
    );
    return updatedArtist;
  }

  deleteArtistById(id: string) {
    this.getArtistById(id);
    this.artists = this.artists.filter((artist) => artist.id !== id);
  }

  getArtistsByIds(ids: string[]) {
    return this.artists.filter((artist) => ids.includes(artist.id));
  }
}
