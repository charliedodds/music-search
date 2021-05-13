import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  list: string[] = ['music-search', 'item 2', 'item 3'];

  addItem(newItem: string): void {
    this.list.push(newItem);
  }
}
