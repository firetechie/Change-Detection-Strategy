import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-onpush',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './onpush.component.html',
  styleUrl: './onpush.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnpushComponent {
  // using Input()
  // @Input() count: number = 0;

  // count$: Observable<number>;
  count: number = 0;

  constructor(private cdr: ChangeDetectorRef) {
    // observable async way
    // let val: number = 0;
    // this.count$ = new Observable((subscriber) => {
    //   setInterval(() => {
    //     subscriber.next(val++)
    //   }, 1000);
    // })

    // using ChangeDetectorRef
    setInterval(() => {
      this.count++;
      this.cdr.markForCheck();
    }, 1000);
  }

  // manul event trigger
  // update(): void {
  //   this.count++;
  // }
}
