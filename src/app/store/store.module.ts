import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { LoansEffects } from './effects';
import { commentsReducer, storeKey } from './reducer';

@NgModule({
  imports: [
    StoreModule.forRoot({[storeKey]: commentsReducer}),
    EffectsModule.forRoot([LoansEffects])
  ],
})
export class LoansStoreModule {
}
