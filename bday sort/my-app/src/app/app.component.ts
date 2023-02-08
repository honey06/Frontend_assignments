import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Person {
  name: string;
  birthdate: string;
}

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-radio-buttons (sortData)="sortData($event)"></app-radio-buttons>
      <app-table [data]="people"></app-table>
    </div>
  `
})
export class AppComponent implements OnInit {
  people: Person[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Person[]>('https://example.com/people.json').subscribe(data => {
      this.people = data;
    });
  }

  updatePeople(sortedData: Person[]) {
    this.people = sortedData;
  }
}
