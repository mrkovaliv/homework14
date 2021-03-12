import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import mainPage from '../ducks/mainPage';
import photo from '../ducks/photo';
import album from '../ducks/album';

const rootReducer = combineReducers({
    mainPage,
    photo,
    album

});

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;



const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;