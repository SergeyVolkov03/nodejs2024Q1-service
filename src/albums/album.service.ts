import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 } from 'uuid';
import { CreateAlbumDTO } from './dto/create-album-dto';
import { Album } from './types/album.type';
import { UpdateAlbumDTO } from './dto/update-album-dto';

@Injectable()
export class AlbumService {
  albums: Album[] = [];

  getAlbums() {
    return this.albums;
  }

  createAlbum(dto: CreateAlbumDTO) {
    const artistId = dto.artistId ? dto.artistId : null;
    const album = {
      artistId: artistId,
      ...dto,
      id: v4(),
    };
    this.albums.push(album);
    return album;
  }

  getAlbumById(id: string) {
    const album = this.albums.find((album) => album.id === id);
    if (!album) {
      throw new NotFoundException('Album not found');
    }
    return album;
  }

  updateAlbumById(id: string, dto: UpdateAlbumDTO) {
    const album = this.getAlbumById(id);
    const updatedAlbum = {
      ...album,
      ...dto,
    };
    this.albums = this.albums.map((album) =>
      album.id === id ? updatedAlbum : album,
    );
    return updatedAlbum;
  }

  deleteAlbumById(id: string) {
    this.getAlbumById(id);
    this.albums = this.albums.filter((album) => album.id !== id);
  }
}
