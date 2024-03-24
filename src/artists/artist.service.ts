import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateArtistDTO } from './dto/create-artist-dto';
import { v4 } from 'uuid';
import { UpdateArtistDTO } from './dto/update-artist-dto';
import { Artist } from './entities/artist.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ArtistService {
  constructor(
    @InjectRepository(Artist)
    private readonly artistRepository: Repository<Artist>,
  ) {}

  async getArtists() {
    return await this.artistRepository.find();
  }

  async getArtistById(id: string) {
    const artist = await this.artistRepository.findOne({ where: { id } });
    if (!artist) {
      throw new NotFoundException('Artist not found');
    }
    return artist;
  }

  async createArtist(dto: CreateArtistDTO) {
    const artist = {
      ...dto,
      id: v4(),
    };
    return await this.artistRepository.save(artist);
  }

  async updateArtistById(id: string, dto: UpdateArtistDTO) {
    const artist = await this.getArtistById(id);
    const updatedArtist = {
      ...artist,
      ...dto,
    };
    return await this.artistRepository.save(updatedArtist);
  }

  async deleteArtistById(id: string) {
    await this.getArtistById(id);
    await this.artistRepository.delete(id);
  }
}
