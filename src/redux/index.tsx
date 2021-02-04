import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import ducks from "./ducks";
import rootSaga from "./sagas/index";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  ducks,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;