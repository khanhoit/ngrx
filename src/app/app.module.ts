import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './ngrx/couter/couter.reducer';
import  { reducer as scoreBoardReducer } from './ngrx/scoreboard/scoreboard.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CouterComponent } from './component/couter/couter.component';
import { ScoreboardComponent } from './component/scoreboard/scoreboard.component';


@NgModule({
  declarations: [
    AppComponent,
    CouterComponent,
    ScoreboardComponent
  ],
  imports: [
    StoreModule.forRoot({ count: counterReducer, scoreBoard: scoreBoardReducer }),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
