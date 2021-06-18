import { createFeatureSelector, createSelector } from '@ngrx/store';

import { StoreState } from './store.model';
import { storeKey } from './reducer';

const getTypedItem = (item: string | number): string | number => {
  return typeof item === 'number' ? item : item.toLowerCase();
};

const getState = createFeatureSelector<StoreState>(storeKey);

export const selectItems = createSelector(getState, ({items, searchValue, sortParams: {column, direction}}: StoreState) => {
  const filteredItems = searchValue ?
    items.filter((item) => Object
      .values(item)
      .some(value => String(value)
        .toLowerCase()
        .includes(searchValue))) :
    [...items];

  if (direction) {
    return filteredItems.sort((a, b) => {
      const columnA = getTypedItem(a[column]);
      const columnB = getTypedItem(b[column]);

      if (columnA < columnB) {
        return direction === 'asc' ? -1 : 1;
      }
      if (columnA > columnB) {
        return direction === 'asc' ? 1 : -1;
      }

      return 0;
    });
  }

  return filteredItems;
});

export const selectSearchValue = createSelector(getState, ({searchValue}: StoreState) => searchValue);
export const selectItemsCallState = createSelector(getState, ({itemsCallState}: StoreState) => itemsCallState);
