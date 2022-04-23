import {combineReducers} from "redux"
import adminReducer from "./adminReducer"
import boardReducer from "./boardReducer"
import userReducer from "./userReducer"

const rootReducer = combineReducers({
    adminReducer,
    boardReducer,
    userReducer
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>