import { takeEvery, put, call } from 'redux-saga/effects';
import Api from '../api/api';
import { SEND_EMAIL, EMAIL_SUCCEEDED, EMAIL_REJECTED } from "../actions/actions";
import { ActionType } from '../types/global';

export function* axiosPostsAsync({ type, payload}: ActionType) {
    try {
        const { data } = yield call(Api.post, "/", { email: payload });
        yield put({ type: EMAIL_SUCCEEDED, payload: data });
    } catch (e) {
        yield put({ type: EMAIL_REJECTED, error: 'Error' });
    }
}

export default function* wathcerPosts() {
    yield takeEvery(SEND_EMAIL, axiosPostsAsync);
}