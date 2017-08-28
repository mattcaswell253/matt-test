import { Component, OnInit } from '@angular/core';
import { Album } from './album.model';
import { AlbumService } from './album.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AlbumService]
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private albumService: AlbumService) { }

  submitForm(title: string, artist: string, description: string) {
   var newAlbum: Album = new Album(title, artist, description);
   this.albumService.addAlbum(newAlbum);
 }


 ngOnInit(){

 }

}
