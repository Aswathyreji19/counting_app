import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true, // ✅ VERY IMPORTANT
  imports: [CounterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Counter App';
}
