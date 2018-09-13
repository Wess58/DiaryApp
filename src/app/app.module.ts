import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { DiaryComponent } from './diary/diary.component';
import { DiaryFormComponent } from './diary-form/diary-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DiaryComponent,
    DiaryFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
