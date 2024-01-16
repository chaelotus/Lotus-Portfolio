import { combineReducers } from 'redux';
import { ModalReducer } from '../reducers/IsOpen';
import { DarkModeReducer } from '../reducers/DarkMode';

const rootReducer = combineReducers({ ModalReducer, DarkModeReducer });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
