import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TempateDrivenFormComponent } from './tempate-driven-form/tempate-driven-form.component';


@NgModule({
  declarations: [
    AppComponent,
    TempateDrivenFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
