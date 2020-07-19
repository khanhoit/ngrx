import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter component] Increment', props<{username: string, password: string}>());
export const decrement = createAction('[Counter component] decrement');
export const reset = createAction('[Counter component] reset');