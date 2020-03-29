import { combineReducers } from 'redux';
import mealsReducer from './meals';

const rootReducer = combineReducers({
	meals: mealsReducer
});

export type TRootState = ReturnType<typeof rootReducer>;
export default rootReducer;
