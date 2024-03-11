import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UuidValidate } from 'src/utilities/uuid';
import { TrackService } from './track.service';
import { CreateTrackDTO } from './dto/create-track-dto';
import { UpdateTrackDTO } from './dto/update-track-dto';

@Controller('track')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  @Get()
  getTracks() {
    return this.trackService.getTracks();
  }

  @Get(':id')
  getTrack(@Param() param: UuidValidate) {
    return this.trackService.getTrackById(param.id);
  }

  @Post()
  createTrack(@Body() dto: CreateTrackDTO) {
    return this.trackService.createTrack(dto);
  }

  @Put(':id')
  updateTrack(@Param() param: UuidValidate, @Body() dto: UpdateTrackDTO) {
    return this.trackService.updateTrackById(param.id, dto);
  }

  @Delete(':id')
  @HttpCode(204)
  deleteTrack(@Param() param: UuidValidate) {
    return this.trackService.deleteTrackById(param.id);
  }
}
