import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-student',
  imports: [],
  template: `
  <h1>Counter: {{ counter }}</h1>
  <button (click)="increaseBy(1)">+1</button>
  <button (click)="increaseBy(-1)">-1</button>
  <button (click)="resetCounter()">Reset</button>
  `,
  // templateUrl: './student.html',
  styleUrls: ['./student.css'],
})
export class Student {
  counter = 10;

  increaseBy(value: number) {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 10;
  }
}
