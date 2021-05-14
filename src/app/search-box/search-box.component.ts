import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent implements OnInit {
  @Output() newSearchArtistsEvent = new EventEmitter<string>();
  @Output() newSearchAlbumsEvent = new EventEmitter<string>();

  artistForm = this.formBuilder.group({
    artist: '',
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.newSearchArtistsEvent.emit(this.artistForm.controls.artist.value);
    this.artistForm.reset();
  }

  // Using temportary variables and second input for album search
  // searchArtists(value: string) {
  // this.newSearchArtistsEvent.emit(this.artistForm.controls.artist.value);
  // }
  // searchAlbums(value: string) {
  //   this.newSearchAlbumsEvent.emit(value);
  // }
}
