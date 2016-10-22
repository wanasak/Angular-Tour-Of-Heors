import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // use two way binding for from inputs
//import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard.component'; // import dashboard component
import { HeroesComponent } from './heroes.component'; // import heroes component
import { HeroDetailComponent } from './hero-detail.component'; // import hero detail component
import { HeroService } from './hero.service'; // import hero service
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule, // add forms module
    AppRoutingModule
    // RouterModule.forRoot([
    //   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    //   { path: 'heroes', component: HeroesComponent},
    //   { path: 'detail/:id', component: HeroDetailComponent },
    //   { path: 'dashboard', component: DashboardComponent}
    // ])
  ],
  declarations: [ 
    AppComponent,
    DashboardComponent, // add dashboard component
    HeroesComponent, // add heroes component
    HeroDetailComponent // add hero detail component
  ],
  providers: [
    HeroService // add hero service
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
