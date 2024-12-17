import { Component } from '@angular/core';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [],
  templateUrl: './default.component.html',
  styleUrl: './default.component.css'
})
export class DefaultComponent {
  count: number = 0;

  constructor(){
    setInterval(() => {
      this.count++;
    }, 1000);
  }
}
