import { Controller, Get } from '@nestjs/common';
import { FavoriteService } from './favorite.service';

@Controller('favs')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @Get()
  getAllFavorites() {
    return this.favoriteService.getAllFavorites();
  }

  //   @Post('/artist/:id')
  //   addArtistToFavorites(@Param() paramUuid: UuidValidate) {
  //     return this.favoriteService.addArtistToFavorites(paramUuid.id);
  //   }

  //   @Post('/album/:id')
  //   addAlbumToFavorites(@Param() paramUuid: UuidValidate) {
  //     return this.favoriteService.addAlbumToFavorites(paramUuid.id);
  //   }

  //   @Post('/track/:id')
  //   addTrackToFavorites(@Param() paramUuid: UuidValidate) {
  //     return this.favoriteService.addTrackToFavorites(paramUuid.id);
  //   }

  //   @Delete('/artist/:id')
  //   @HttpCode(204)
  //   deleteArtistFromFavorites(@Param() paramUuid: UuidValidate) {
  //     this.favoriteService.deleteArtistFromFavorites(paramUuid.id);
  //   }

  //   @Delete('/album/:id')
  //   @HttpCode(204)
  //   deleteAlbumFromFavorites(@Param() paramUuid: UuidValidate) {
  //     this.favoriteService.deleteAlbumFromFavorites(paramUuid.id);
  //   }

  //   @Delete('/artist/:id')
  //   @HttpCode(204)
  //   deleteTrackFromFavorites(@Param() paramUuid: UuidValidate) {
  //     this.favoriteService.deleteTrackFromFavorites(paramUuid.id);
  //   }
}
