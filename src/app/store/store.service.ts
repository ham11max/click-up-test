import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectItems, selectItemsCallState, selectSearchValue, } from './selectors';
import { loadItems, updateSearch, updateSort } from './actions';
import { StoreState } from './store.model';
import { SortParams } from '../components/table/table.model';
import { CommentItem } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  readonly itemsCallState$ = this.store.select(selectItemsCallState);
  readonly items$ = this.store.select(selectItems);
  readonly searchValue$ = this.store.select(selectSearchValue);

  constructor(private readonly store: Store<StoreState>) {
  }

  loadItems(): void {
    this.store.dispatch(loadItems());
  }

  updateSearch(value: string): void {
    this.store.dispatch(updateSearch({value}));
  }

  updateSort(sortParams: SortParams<CommentItem>): void {
    this.store.dispatch(updateSort({sortParams}));
  }
}
