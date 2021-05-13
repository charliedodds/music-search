import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-app-child',
  templateUrl: './app-child.component.html',
  styleUrls: ['./app-child.component.scss'],
})
export class AppChildComponent implements OnInit {
  @Input() list: string[];
  @Output() newItemEvent: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  sendNewItem(value: string): void {
    this.newItemEvent.emit(value);
  }
}
