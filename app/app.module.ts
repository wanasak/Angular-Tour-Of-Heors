import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // use two way binding for from inputs

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component'; // import hero detail component

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule // add forms module
  ],
  declarations: [ 
    AppComponent,
    HeroDetailComponent // add hero detail component
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
