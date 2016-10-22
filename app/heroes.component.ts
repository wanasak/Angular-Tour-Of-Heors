import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero'; // import hero class
import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    templateUrl: 'heroes.component.html',
    styleUrls: [ 'heroes.component.css' ]
})

export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    // inject hero service
    constructor(
        private heroService: HeroService,
        private router: Router) {}

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        //this.heroes = this.heroService.getHeroes();
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes);
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}