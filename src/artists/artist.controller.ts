import { ArtistService } from './artist.service';
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
import { CreateArtistDTO } from './dto/create-artist-dto';
import { UpdateArtistDTO } from './dto/update-artist-dto';

@Controller('artist')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Get()
  getArtists() {
    return this.artistService.getArtists();
  }

  @Get(':id')
  getArtist(@Param() param: UuidValidate) {
    return this.artistService.getArtistById(param.id);
  }

  @Post()
  createArtist(@Body() dto: CreateArtistDTO) {
    return this.artistService.createArtist(dto);
  }

  @Put(':id')
  updateArtist(@Param() param: UuidValidate, @Body() dto: UpdateArtistDTO) {
    return this.artistService.updateArtistById(param.id, dto);
  }

  @Delete(':id')
  @HttpCode(204)
  deleteArtist(@Param() param: UuidValidate) {
    return this.artistService.deleteArtistById(param.id);
  }
}
