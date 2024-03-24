// import { Injectable } from '@nestjs/common';
// import { TrackService } from 'src/tracks/track.service';
// import { AlbumService } from 'src/albums/album.service';
// import { ArtistService } from 'src/artists/artist.service';
// import { Favorites } from './types/favorite.types';

// @Injectable()
// export class FavoriteService {
//   constructor(
//     private readonly trackService: TrackService,
//     private readonly albumService: AlbumService,
//     private readonly artistService: ArtistService,
//   ) {}

//   favorites: Favorites = {
//     artists: [],
//     albums: [],
//     tracks: [],
//   };

//   getAllFavorites() {
//     return;
//   }

//   addArtistToFavorites(id: string) {
//     const artist = this.artistService.getArtistById(id);
//     this.favorites.artists.push(id);
//     return artist;
//   }

//   addAlbumToFavorites(id: string) {
//     const album = this.albumService.getAlbumById(id);
//     this.favorites.albums.push(id);
//     return album;
//   }

//   addTrackToFavorites(id: string) {
//     const track = this.trackService.getTrackById(id);
//     this.favorites.tracks.push(id);
//     return track;
//   }

//   deleteArtistFromFavorites(id: string) {
//     this.favorites.artists = this.favorites.artists.filter(
//       (artistId) => artistId !== id,
//     );
//   }

//   deleteAlbumFromFavorites(id: string) {
//     this.favorites.albums = this.favorites.albums.filter(
//       (albumId) => albumId !== id,
//     );
//   }

//   deleteTrackFromFavorites(id: string) {
//     this.favorites.tracks = this.favorites.tracks.filter(
//       (trackId) => trackId !== id,
//     );
//   }
// }
