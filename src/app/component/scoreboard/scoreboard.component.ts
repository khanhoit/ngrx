import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { awayScore, homeScore, resetScore, setScore } from '../../ngrx/scoreboard/scoreboard.action'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {
  scoreBoard$: Observable<any>;

  constructor(private store: Store<{ scoreBoard: any }>) {
    this.scoreBoard$ = store.pipe(select('scoreBoard'));
   }

  ngOnInit(): void {
    this.store.dispatch(awayScore());
  }

}
