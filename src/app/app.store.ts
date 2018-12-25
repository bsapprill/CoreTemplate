
import { combineReducers } from "redux";

import { CoreOne_Reducer } from "./core-one/core-one.reducers";
import { CoreOne } from "./core-one/core-one.model";
import { CoreTwo } from "./core-two/core-two.model";
import { CoreThree } from "./core-three/core-three.model";
import { CoreTwo_Reducer } from "./core-two/core-two.reducers";
import { CoreThree_Reducer } from "./core-three/core-three.reducers";
import { Total_State_Sum_Reducer } from "./app.reducers";


export interface IAppState {

    Total_State_Sum: number,

    CoreOne_State: number,
    CoreTwo_State: number,
    CoreThree_State: number,
}

export const INITIAL_STATE: IAppState = {
    
    Total_State_Sum: 0,
    
    CoreOne_State: 0,
    CoreTwo_State: 0,
    CoreThree_State: 0,
}

export const rootReducer = combineReducers({

    Total_State_Sum: Total_State_Sum_Reducer,

    CoreOne_State: CoreOne_Reducer,
    CoreTwo_State: CoreTwo_Reducer,
    CoreThree_State: CoreThree_Reducer,
})
