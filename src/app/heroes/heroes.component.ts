import { Component } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../Hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'] // overwritten by global css, can't figure out why, doesn't matter to me
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
