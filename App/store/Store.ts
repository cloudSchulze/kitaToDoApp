import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import itemSaga from "./Items/ItemSaga";

import { all } from "redux-saga/effects";
import { itemReducer } from "./Items/ItemReducer";
import { itemMiddleware } from "./Items/ItemMiddleware";

const initialiseSagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
  items: itemReducer,
});

function* rootSaga() {
  yield all([itemSaga()]);
}

export const store = createStore(
  rootReducer,
  applyMiddleware(initialiseSagaMiddleware, itemMiddleware)
);

initialiseSagaMiddleware.run(rootSaga);
