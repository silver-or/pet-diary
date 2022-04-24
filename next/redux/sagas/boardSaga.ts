import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { boardActions } from '../../redux/reducers/boardReducer';
import { addArticleApi } from '../api/boardApi'

interface AddArticleType{
    type: string;
    payload: {
        title: string, content: string
    }
}

interface AddArticleSuccessType{
    type: string;
    payload: {
        title: string, content: string
    }
}

function* add(add: AddArticleType){
    try{
        alert('진행 3 : saga 내부 글쓰기 요청' + JSON.stringify(add))
        const response : AddArticleSuccessType = yield addArticleApi(add.payload)
        yield put(boardActions.addArticleSuccess(response))
        console.log(response)
        // window.location.href = '/'
    }catch(error){
        alert('진행 3 : saga 내부 글쓰기 실패') 
        yield put(boardActions.addArticleFailure(error))
        // window.location.href = '/user/login'
    }
}

export function* watchAddArticle(){
    yield takeLatest(boardActions.addArticleRequest, add)
}