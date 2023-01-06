import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import todoReducer from './todoReducer';

const rootReducer = combineReducers({
    todos: todoReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;