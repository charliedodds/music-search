import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
  @Input() album;
  isFlipped: boolean;

  constructor() {
    this.isFlipped = false;
  }

  ngOnInit(): void {}

  flip(): void {
    this.isFlipped = !this.isFlipped;
  }
}
