import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [FormBuilderComponent]
})
export class AppModule { }
