
import { applyMiddleware, createStore } from "redux";
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import wathcerPosts from '../saga/saga';

const sagaMiddle = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddle));
sagaMiddle.run(wathcerPosts);


export default store;