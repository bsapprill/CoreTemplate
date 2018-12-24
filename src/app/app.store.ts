
import { combineReducers } from "redux";
import { CoresActivated_Reducer } from "./app.reducers";
import { CoreOne_Reducer } from "./core-one/core-one.reducers";
import { CoreOne } from "./core-one/core-one.model";
import { CoreTwo } from "./core-two/core-two.model";
import { CoreThree } from "./core-three/core-three.model";


export interface IAppState {

    CoresActivated: boolean[],

    CoreOne_State: CoreOne,
    CoreTwo_State: CoreTwo,
    CoreThree_State: CoreThree,
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
    CoreTwo_State: {
        name: "CoreTwo",
        number: 0,
        data: {
            noteOne: "",
            noteTwo: "",
        }
    },
    CoreThree_State: {
        name: "CoreThree",
        number: 0,
        data: {
            noteOne: "",
            noteTwo: "",
        }
    },
}

export const rootReducer = combineReducers({
    
    CoresActivated: CoresActivated_Reducer,

    CoreOne_State: CoreOne_Reducer,
    CoreTwo_State: CoreTwo_Reducer,
    CoreThree_State: CoreThree_Reducer,
})
