import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radio',
  template: `
    <div>
      <input type="radio" name="sort" (click)="sortData('name')">Sort by Name
      <input type="radio" name="sort" (click)="sortData('age')">Sort by Age
    </div>
  `
})
export class RadioButtonComponent {
  @Output() sortData = new EventEmitter<string>();

  onSortData(sortOption: string) {
    this.sortData.emit(sortOption);
  }
}
