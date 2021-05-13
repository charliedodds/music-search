import { Component } from '@angular/core';

import config from '../../config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  list: string[] = ['music-search', 'item 2', 'item 3'];
  artist: object | null = null;
  albums: object | null = null;

  addItem(newItem: string): void {
    this.list.push(newItem);
  }

  async searchArtists(unformattedArtist: string) {
    const artist: string = unformattedArtist.split(' ').join('_');
    const response: Response = await fetch(
      `https://theaudiodb.com/api/v1/json/${config.apiKey}/search.php?s=${artist}`
    );
    const data = await response.json();
    this.artist = data.artists[0];
    this.searchAlbums(artist);
  }

  async searchAlbums(artist: string) {
    const response: Response = await fetch(
      `https://theaudiodb.com/api/v1/json/${config.apiKey}/searchalbum.php?s=${artist}`
    );
    const data = await response.json();
    this.albums = data.album;
  }
}
