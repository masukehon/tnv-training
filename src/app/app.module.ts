import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule} from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WordComponent } from './word/word.component';
import { FormComponent } from './form/form.component';
import { SelectComponent } from './select/select.component';

import {WordReducer, FilterReducer} from './reducer';


@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    FormComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      listWords: WordReducer,
      filterStatus: FilterReducer
    }),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
