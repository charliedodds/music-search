import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-filter-dropdown',
  templateUrl: './filter-dropdown.component.html',
  styleUrls: ['./filter-dropdown.component.scss'],
})
export class FilterDropdownComponent implements OnInit {
  @Output() newFilterAlbumsEvent = new EventEmitter<object>();

  beforeMax: number;
  afterMax: number;
  showFilterForm: boolean;

  filterForm = this.formBuilder.group({
    releasedBefore: null,
    releasedAfter: null,
    scoresAbove: null,
    scoresBelow: null,
  });

  constructor(private formBuilder: FormBuilder) {
    this.beforeMax = new Date().getFullYear() + 1;
    this.afterMax = new Date().getFullYear();
    this.showFilterForm = false;
  }

  ngOnInit(): void {}

  toggleFilterForm(): void {
    this.showFilterForm = !this.showFilterForm;
  }

  resetInput(input): void {
    this.filterForm.controls[input].reset();
  }

  onSubmit(): void {
    const { controls } = this.filterForm;
    const filters = {};
    for (let key in controls) {
      if (controls[key].value) {
        filters[key] = controls[key].value;
      }
    }
    this.newFilterAlbumsEvent.emit(filters);
    this.filterForm.reset();
  }
}
