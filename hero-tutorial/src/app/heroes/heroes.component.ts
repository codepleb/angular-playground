import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../hero-detail/hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes: Hero[];
  selectedHero: Hero;
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor(
    private heroService: HeroService,
    private router: Router
    ) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
