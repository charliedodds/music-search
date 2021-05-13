import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent implements OnInit {
  @Output() newSearchEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  handleSubmit(value: string) {
    this.newSearchEvent.emit(value);
  }
}
