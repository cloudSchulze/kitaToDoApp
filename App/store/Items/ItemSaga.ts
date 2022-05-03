import { call, put, takeEvery } from "redux-saga/effects";
import {
  addItemAsync,
  deleteItemAsync,
  getItemsAsync,
  updateItemAsync,
} from "../../services/ItemService";
import {
  addItemToListEndAction,
  loadItemListAction,
  loadItemListEndAction,
  removeItemFromListAction,
  removeItemFromListEndAction,
  updateItemEndAction,
} from "./ItemAction";

export default function* watcherSaga() {
  yield takeEvery(loadItemListAction, loadItemListSaga);
  yield takeEvery(loadItemListAction, addItemToListSaga);
  yield takeEvery(removeItemFromListAction, removeItemFromListSaga);
}

function* loadItemListSaga(action: any) {
  const { error, data } = yield call(getItemsAsync);
  yield put({
    type: loadItemListEndAction.type,
    payload: data,
  });
}

function* addItemToListSaga(action: any) {
  const { error, data } = yield call(addItemAsync, action.payload);
  yield put({
    type: addItemToListEndAction.type,
    payload: data,
  });
}

function* removeItemFromListSaga(action: any) {
  const { error, data } = yield call(deleteItemAsync, action.payload);
  yield put({
    type: removeItemFromListEndAction.type,
    payload: data,
  });
}

function* updateItemSaga(action: any) {
  const { error, data } = yield call(updateItemAsync, action.payload);
  yield put({
    type: updateItemEndAction.type,
    payload: data,
  });
}
