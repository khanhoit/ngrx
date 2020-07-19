import {createReducer, on} from '@ngrx/store';
import {increment, decrement, reset} from './couter.action';

export const initialState =0;

const _countReducer = createReducer(
    initialState,
    on(increment, (state, props) => {
        console.log(props)
        return (state + 1)}),
    on(decrement, state => state -1),
    on(reset, state => initialState),
)

export function counterReducer (state, action) {
    return _countReducer(state, action)
}