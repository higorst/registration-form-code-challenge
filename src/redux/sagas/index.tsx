import { all, takeEvery, takeLatest } from "redux-saga/effects";

import {
  sagaLoad,
} from './sagaLoad'

import {
  sagaSend,
} from './sagaSend'

import {
  sagaDelete,
} from './sagaDelete'

import { 
  SAGA_LOAD,
  SAGA_SEND,
  SAGA_DELETE,
} from './types'

export default function* rootSaga() {
  yield all([
    takeLatest(SAGA_LOAD, sagaLoad),
    takeLatest(SAGA_SEND, sagaSend),

    takeEvery(SAGA_DELETE, sagaDelete),
  ]);
}
