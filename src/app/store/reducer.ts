import { createReducer, on } from '@ngrx/store';

import { loadItems, loadItemsError, loadItemsSuccess, updateSearch, updateSort, } from './actions';
import { StoreState } from './store.model';
import { CallState } from '../models/call-state.model';

export const initialState: StoreState = {
  items: [],
  itemsCallState: CallState.Init,
  searchValue: '',
  sortParams: {column: 'id', direction: ''}
};

export const storeKey = 'comments';
export const commentsReducer = createReducer<StoreState>(
  initialState,
  on(loadItems, (state) => ({...state, itemsCallState: CallState.Loading})),
  on(loadItemsSuccess, (state, {items}) => ({
    ...state,
    items,
    itemsCallState: CallState.Loaded,
  })),
  on(loadItemsError, (state) => ({
    ...state,
    itemsCallState: CallState.Error,
  })),
  on(updateSearch, (state, {value}) => ({
    ...state,
    searchValue: value.toLowerCase(),
  })),
  on(updateSort, (state, {sortParams}) => ({
    ...state,
    sortParams
  })),
);
