import { Component } from '@angular/core';
import { DefaultComponent } from './components/default/default.component';
import { OnpushComponent } from './components/onpush/onpush.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DefaultComponent, OnpushComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'change-detection-strategy';
  count: number = 0;

  constructor() {
    setInterval(() => {
      this.count++;
    }, 1000);
  }

}
