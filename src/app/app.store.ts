
import { combineReducers } from "redux";
import { CoresActivated_Reducer } from "./app.reducers";
import { CoreOne_Reducer } from "./core-one/core-one.reducers";
import { CoreOne } from "./core-one/core-one.model";


export interface IAppState {

    CoresActivated: boolean[],

    CoreOne_State: CoreOne,
    // CoreTwo_State: number,
    // CoreThree_State: number,
}

export const INITIAL_STATE: IAppState = {

    CoresActivated: [false, false, false],

    CoreOne_State: {
        name: "CoreOne",
        number: 0,
        data: {
            noteOne: "",
            noteTwo: "",
        }
    },
    // CoreTwo_State: 0,
    // CoreThree_State: 0,
}

export const rootReducer = combineReducers({
    
    CoresActivated: CoresActivated_Reducer,

    CoreOne_State: CoreOne_Reducer,
})
