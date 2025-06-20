import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true, // ✅ ALSO IMPORTANT
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  counter: number = 0;
  history: string[] = [];

  increment() {
    this.counter++;
    this.history.unshift(`[+1] Counter is now ${this.counter}`);
  }

  decrement() {
    this.counter--;
    this.history.unshift(`[-1] Counter is now ${this.counter}`);
  }

  reset() {
    this.counter = 0;
    this.history.unshift(`[Reset] Counter is now ${this.counter}`);
  }

  clearHistory() {
    this.history = [];
  }
}
