import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TransactionComponent } from './transaction-view/transaction/transaction.component';
import { TransactionFormComponent } from './transaction-view/transaction-form/transaction-form.component';
import { TransactionViewComponent } from './transaction-view/transaction-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent,
    TransactionFormComponent,
    TransactionViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
