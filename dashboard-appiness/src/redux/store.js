
import { createStore } from "redux";
//import createSagaMiddleware from 'redux-saga';
import rootReducer from "./reducer";

//const applySagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer);

export default store;