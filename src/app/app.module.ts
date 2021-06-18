import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoansStoreModule } from './store/store.module';

import { TableModule } from './components/table/table.module';
import { FilterInputModule } from './components/filter-input/filter-input.module';
import { ContainerWrapperModule } from './components/container-wrapper/container-wrapper.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    LoansStoreModule,

    TableModule,
    FilterInputModule,
    ContainerWrapperModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
