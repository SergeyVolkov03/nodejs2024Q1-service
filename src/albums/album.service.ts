import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 } from 'uuid';
import { CreateAlbumDTO } from './dto/create-album-dto';
import { UpdateAlbumDTO } from './dto/update-album-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Album } from './entities/album.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AlbumService {
  constructor(
    @InjectRepository(Album)
    private readonly albumRepository: Repository<Album>,
  ) {}

  async getAlbums() {
    return await this.albumRepository.find();
  }

  async getAlbumById(id: string) {
    const album = await this.albumRepository.findOne({ where: { id } });
    if (!album) {
      throw new NotFoundException('Album not found');
    }
    return album;
  }

  async createAlbum(dto: CreateAlbumDTO) {
    const artistId = dto.artistId ? dto.artistId : null;
    const album = {
      artistId: artistId,
      ...dto,
      id: v4(),
    };
    return await this.albumRepository.save(album);
  }

  async updateAlbumById(id: string, dto: UpdateAlbumDTO) {
    const album = await this.getAlbumById(id);
    const updatedAlbum = {
      ...album,
      ...dto,
    };
    return await this.albumRepository.save(updatedAlbum);
  }

  async deleteAlbumById(id: string) {
    await this.getAlbumById(id);
    await this.albumRepository.delete(id);
  }
}
