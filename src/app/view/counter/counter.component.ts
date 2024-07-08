import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrease, increase, clear, countSelector, updatedAtSelector } from '../../reducers/counter';
import { map } from 'rxjs';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  imports: [CommonModule]
})
export class CounterComponent {

  count$ = this.store.select(countSelector);
  cannotDecrease$ = this.count$.pipe(map((count: number) => count <= 0));
  updatedAt$ = this.store.select(updatedAtSelector);

  constructor(private store: Store) {
  }

  increase(): void {
    this.store.dispatch(increase());
  }

  decrease(): void {
    this.store.dispatch(decrease());
  }

  clear(): void {
    this.store.dispatch(clear());
  }

}
