import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent implements OnInit {
  @Output() newSearchArtistsEvent = new EventEmitter<string>();
  @Output() newSearchAlbumsEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  searchArtists(value: string) {
    this.newSearchArtistsEvent.emit(value);
  }

  searchAlbums(value: string) {
    this.newSearchAlbumsEvent.emit(value);
  }
}
