import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Album } from '../album.model';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
  providers: [AlbumService]
})
export class AlbumDetailComponent implements OnInit {
  albumTitle: string;
  albumToDisplay: Album;
  albuM: Album;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private albumService: AlbumService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.albumTitle = urlParameters['title'];
    });
    console.log(this.albumTitle)
    console.log(this.albumService)
    console.log(this.albumService.getAlbumByTitle(this.albumTitle))
    this.albumToDisplay = this.albumService.getAlbumByTitle(this.albumTitle);
  }

}
