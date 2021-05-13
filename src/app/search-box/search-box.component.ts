import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent implements OnInit {
  data = undefined;
  constructor() {}

  ngOnInit(): void {}

  async search(unformattedArtist) {
    const artist = unformattedArtist.split(' ').join('_');
    console.log(artist);
    const response = await fetch(
      `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`
    );
    const data = await response.json();
    this.data = data;
    console.log(this.data);
    console.log(this.data.artists[0]);
  }
}
