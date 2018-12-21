
import { combineReducers } from "redux";
import { CoresActivated_Reducer } from "./app.reducers";


export interface IAppState {

    CoresActivated: boolean[],
}

export const INITIAL_STATE: IAppState = {

    CoresActivated: [false, false, false],
}

export const rootReducer = combineReducers({
    
    CoresActivated: CoresActivated_Reducer,

    
})

