import {createSlice} from "@reduxjs/toolkit"

export interface BoardType{
    title: string;
    article: string;
}

export interface BoardState{
    loading: boolean;
    data: BoardType[];
    error: any;
}

const initialState: BoardState = {
    loading: false,
    data: [],
    error: null
}

export const boardSlice = createSlice({
    name : 'boards',
    initialState,
    reducers : {
        addArticleRequest(state: BoardState, payload){
            alert('진행 2 : 글쓰기 리듀서 내부 ') 
            alert('리듀서 내부로 들어온 board 데이터 : ' + JSON.stringify(payload))
            state.loading = true;
        },
        addArticleSuccess(state: BoardState, {payload}){ 
            state.data = [...state.data, payload]
            state.loading = false; 
        },
        addArticleFailure(state: BoardState, {payload}){ 
            state.data = payload;
            state.loading = false;
        }
    }
})

const {reducer, actions} = boardSlice

export const boardActions = actions

export default reducer