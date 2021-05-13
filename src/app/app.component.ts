import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  list: string[] = ['music-search', 'item 2', 'item 3'];
  artists = undefined;
  addItem(newItem: string): void {
    this.list.push(newItem);
  }

  async search(unformattedArtist) {
    const artist = unformattedArtist.split(' ').join('_');
    console.log(artist);
    const response = await fetch(
      `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`
    );
    const data = await response.json();
    this.artists = data.artists;
    console.log(this.artists);
    console.log(this.artists[0]);
  }
}
