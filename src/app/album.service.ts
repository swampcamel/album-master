import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { ALBUMS } from './mock-albums';

@Injectable()
export class AlbumService {

  constructor() { }

  getAlbums() {
    return ALBUMS;
  }

  getAlbumByTitle(albumTitle: string) {
    for (var i = 0; i <= ALBUMS.length - 1; i++) {
      if (ALBUMS[i].title === albumTitle) {
        return ALBUMS[i];
      }
    }
  }
}
