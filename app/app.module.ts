import './rxjs-extensions';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'; // import http module
import { FormsModule } from '@angular/forms'; // use two way binding for from inputs
//import { RouterModule } from '@angular/router';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard.component'; // import dashboard component
import { HeroesComponent } from './heroes.component'; // import heroes component
import { HeroDetailComponent } from './hero-detail.component'; // import hero detail component
import { HeroSearchComponent } from './hero-search.component';
import { HeroService } from './hero.service'; // import hero service
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    FormsModule, // add forms module
    AppRoutingModule // add routing module
  ],
  declarations: [ 
    AppComponent,
    DashboardComponent, // add dashboard component
    HeroesComponent, // add heroes component
    HeroDetailComponent ,// add hero detail component
    HeroSearchComponent
  ],
  providers: [
    HeroService // add hero service
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
