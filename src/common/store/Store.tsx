import { combineReducers } from 'redux';
import { DarkModeReducer } from '../reducers/DarkMode';

const rootReducer = combineReducers({ DarkModeReducer });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
