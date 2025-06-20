import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
   standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  counter = 0;
  history: string[] = [];

  increment() {
    this.counter++;
    this.history.push(`[+1] Counter is now ${this.counter}`);
  }

  decrement() {
    this.counter--;
    this.history.push(`[-1] Counter is now ${this.counter}`);
  }

  reset() {
    this.counter = 0;
    this.history.push(`[Reset] Counter is now ${this.counter}`);
  }

  clearHistory() {
    this.history = [];
  }
}
