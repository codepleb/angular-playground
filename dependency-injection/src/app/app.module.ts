import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HeroesComponent} from './heroes.component';
import {HeroListComponent} from './heroes-list.component';
import {HeroService} from './hero.service';
import {Logger} from './logger.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    HeroService,
    Logger,
    // { provide: APP_CONFIG, useValue: HERO_DI_CONFIG }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
