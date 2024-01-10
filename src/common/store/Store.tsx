import { combineReducers } from 'redux';
import { ModalReducer } from '../reducers/IsOpen';

const rootReducer = combineReducers({ ModalReducer });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
