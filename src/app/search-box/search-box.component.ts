import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent implements OnInit {
  @Input() albums: object[] | null;
  @Output() newSearchArtistsEvent = new EventEmitter<string>();
  @Output() newFilterAlbumsEvent = new EventEmitter<object>();
  // Second output for album search
  // @Output() newSearchAlbumsEvent = new EventEmitter<string>();

  artistForm = this.formBuilder.group({
    artist: '',
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.newSearchArtistsEvent.emit(this.artistForm.controls.artist.value);
    this.artistForm.reset();
  }

  filterAlbums(filters): void {
    this.newFilterAlbumsEvent.emit(filters);
  }

  // Using temportary variables and second input for album search
  // searchArtists(value: string) {
  // this.newSearchArtistsEvent.emit(this.artistForm.controls.artist.value);
  // }
  // searchAlbums(value: string) {
  //   this.newSearchAlbumsEvent.emit(value);
  // }
}
