import { Injectable } from '@angular/core';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { loadItems, loadItemsError, loadItemsSuccess, } from './actions';
import { DataHttpService } from '../services/data-http.service';

@Injectable()
export class LoansEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly dataHttpService: DataHttpService
  ) {}

  fetchItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadItems),
      switchMap(() =>
        this.dataHttpService.getComments().pipe(
          map((items) => loadItemsSuccess({items})),
          catchError(() => of(loadItemsError())),
        ),
      ),
    ),
  );
}
