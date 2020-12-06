import tableReducer from "./table-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from "./app-reducer";


let reducers = combineReducers({
    tablePage: tableReducer,
    app: appReducer,
    form: formReducer
});

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.__store__ = store;

export default store;