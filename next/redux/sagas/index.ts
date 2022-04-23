import { all } from 'redux-saga/effects';
import { watchJoin, watchLogin } from "./userSaga";
import { watchAddArticle } from "./boardSaga"

export default function* rootSaga() {
    yield all([watchJoin(), watchLogin(), watchAddArticle()])
}