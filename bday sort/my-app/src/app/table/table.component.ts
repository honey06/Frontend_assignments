import { Component, Input } from '@angular/core';

interface Person {
  name: string;
  birthdate: string;
}

@Component({
  selector: 'app-table',
  template: `
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Birthdate</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let person of data">
          <td>{{ person.name }}</td>
          <td>{{ person.birthdate }}</td>
        </tr>
      </tbody>
    </table>
  `
})
export class TableComponent {
  data: any[] = [];
}

