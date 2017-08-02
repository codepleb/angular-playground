import {Component} from '@angular/core';
import {HeroService} from "./hero.service";

@Component({
  selector: 'app-my-heroes',
  providers: [HeroService],
  template: `
    <h2>Heroes</h2>
    <app-hero-list></app-hero-list>
  `
})
export class HeroesComponent { }
