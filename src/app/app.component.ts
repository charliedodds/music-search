import { Component } from '@angular/core';

import config from '../../config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  list: string[] = ['music-search', 'item 2', 'item 3'];
  artists = undefined;
  albums = undefined;
  addItem(newItem: string): void {
    this.list.push(newItem);
  }

  async searchArtists(unformattedArtist) {
    const artist = unformattedArtist.split(' ').join('_');
    console.log(artist);
    const response = await fetch(
      `https://theaudiodb.com/api/v1/json/${config.apiKey}/search.php?s=${artist}`
    );
    const data = await response.json();
    this.artists = data.artists;
    console.log(this.artists);
  }

  async searchAlbums(unformattedArtist) {
    const artist = unformattedArtist.split(' ').join('_');
    console.log(artist);
    const response = await fetch(
      `https://theaudiodb.com/api/v1/json/${config.apiKey}/searchalbum.php?s=${artist}`
    );
    const data = await response.json();
    this.albums = data.album;
    console.log(this.albums);
  }
}
