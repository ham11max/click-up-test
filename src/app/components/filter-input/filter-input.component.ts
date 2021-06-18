import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-filter-input',
  templateUrl: './filter-input.component.html',
  styleUrls: ['./filter-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterInputComponent implements OnInit {
  private readonly destroy$ = new Subject<void>();
  readonly searchControl = new FormControl('');

  @Output() updateFiler = new EventEmitter<string>();

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(400),
      takeUntil(this.destroy$)
    ).subscribe({
      next: value => this.updateFiler.emit(value)
    });
  }
}
