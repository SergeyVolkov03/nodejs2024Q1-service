import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 } from 'uuid';
import { Track } from './types/track.type';
import { CreateTrackDTO } from './dto/create-track-dto';
import { UpdateTrackDTO } from './dto/update-track-dto';

@Injectable()
export class TrackService {
  tracks: Track[] = [];

  getTracks() {
    return this.tracks;
  }

  createTrack(dto: CreateTrackDTO) {
    const artistId = dto.artistId ? dto.artistId : null;
    const albumId = dto.albumId ? dto.albumId : null;
    const track = {
      artistId: artistId,
      albumId: albumId,
      ...dto,
      id: v4(),
    };
    this.tracks.push(track);
    return track;
  }

  getTrackById(id: string) {
    const track = this.tracks.find((track) => track.id === id);
    if (!track) {
      throw new NotFoundException('Track not found');
    }
    return track;
  }

  updateTrackById(id: string, dto: UpdateTrackDTO) {
    const track = this.getTrackById(id);
    const updatedTrack = {
      ...track,
      ...dto,
    };
    this.tracks = this.tracks.map((track) =>
      track.id === id ? updatedTrack : track,
    );
    return updatedTrack;
  }

  deleteTrackById(id: string) {
    this.getTrackById(id);
    this.tracks = this.tracks.filter((track) => track.id !== id);
  }

  getTracksByIds(ids: string[]) {
    return this.tracks.filter((track) => ids.includes(track.id));
  }
}
