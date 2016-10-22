import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from './hero'; // import hero class
import { HeroService } from './hero.service'; // import hero service

@Component({
    moduleId: module.id,
    selector: 'my-hero-detail',
    template: `
        <div *ngIf="hero">
            <h2>{{ hero.name }} details!</h2>
            <div><label>id: </label>{{ hero.id }}</div>
            <div>
                <label>name: </label>
                <input placeholder="name" [(ngModel)]="hero.name" />
            </div>
        </div>
        <button (click)="goBack()">Back</button>
    `,
    styleUrls: [ 'hero-detail.component.css' ]
})

export class HeroDetailComponent implements OnInit {
    
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id']; // (+) = convert param value to a number
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        });
    }

    goBack(): void {
        this.location.back();
    }
    
    @Input() // annotation input
    hero: Hero;
}