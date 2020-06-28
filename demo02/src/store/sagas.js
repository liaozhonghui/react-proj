import { takeEvery, put } from 'redux-saga/effects'
import { GET_MY_LIST } from './actionTypes'
import { getListAction } from './actionCreators'
import axios from 'axios'

function* mySaga() {
    yield takeEvery(GET_MY_LIST, getList)
}

function* getList() {
    const res = yield axios.get('http://localhost:4000/data')
    const data = res.data;
    console.log('generator:', data);
    const action = getListAction(data);
    yield put(action);
}

export default mySaga