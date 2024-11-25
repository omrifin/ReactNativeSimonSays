import { createStore, combineReducers } from 'redux';
import gameReducer from '../redux/gameReducer';

const rootReducer = combineReducers({
  game: gameReducer,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export default store;