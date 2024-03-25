import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 } from 'uuid';
import { CreateTrackDTO } from './dto/create-track-dto';
import { UpdateTrackDTO } from './dto/update-track-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Track } from './entities/track.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TrackService {
  constructor(
    @InjectRepository(Track)
    private readonly trackRepository: Repository<Track>,
  ) {}

  async getTracks() {
    return await this.trackRepository.find();
  }

  async getTrackById(id: string) {
    const track = await this.trackRepository.findOne({ where: { id } });
    if (!track) {
      throw new NotFoundException('Track not found');
    }
    return track;
  }

  async createTrack(dto: CreateTrackDTO) {
    const artistId = dto.artistId ? dto.artistId : null;
    const albumId = dto.albumId ? dto.albumId : null;
    const track = {
      artistId: artistId,
      albumId: albumId,
      ...dto,
      id: v4(),
    };
    return await this.trackRepository.save(track);
  }

  async updateTrackById(id: string, dto: UpdateTrackDTO) {
    const track = await this.getTrackById(id);
    const updatedTrack = {
      ...track,
      ...dto,
    };
    return await this.trackRepository.save(updatedTrack);
  }

  async deleteTrackById(id: string) {
    await this.getTrackById(id);
    await this.trackRepository.delete(id);
  }
}
