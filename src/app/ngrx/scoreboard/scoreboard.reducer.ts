import { Action, createReducer, on } from '@ngrx/store';
import * as ScoreboardActions from './scoreboard.action';

export interface State {
  home: number;
  away: number;
}

export const initialState: State = {
  home: 0,
  away: 0,
};

const scoreboardReducer = createReducer(
  initialState,
  on(ScoreboardActions.homeScore, (state) => ({
    ...state,
    home: state.home + 1,
  })),
  on(ScoreboardActions.awayScore, (state) => ({
    ...state,
    away: state.away + 1,
  })),
  on(ScoreboardActions.resetScore, (state) => ({ home: 0, away: 0 })),
//   on(ScoreboardActions.setScore, (state, { game }) => ({
//     home: game.home,
//     away: game.away,
//   }))
);

export function reducer(state: State | undefined, action: Action) {
  return scoreboardReducer(state, action);
}
