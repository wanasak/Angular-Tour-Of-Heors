import { Component, Input } from '@angular/core';
import { Hero } from './hero'; // import hero class

@Component({
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
    `
})

export class HeroDetailComponent {
    @Input() // annotation input
    hero: Hero;
}