import {combineReducers, createStore} from 'redux';
import {reducer} from './reducer';

const rootReducer = combineReducers({
   counter: reducer
});

export type AppRootStateType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);


