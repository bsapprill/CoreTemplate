
import { createReducer } from "../app.reducer-utility";

export const CoreThree_Reducer = createReducer({}, {
    INCREMENT_STATETHREE: Increment_StateThree,
    DECREMENT_STATETHREE: Decrement_StateThree,
});

    function Increment_StateThree(CoreThree_State) {
        return CoreThree_State.number++;
    }

    function Decrement_StateThree(CoreThree_State) {
        return CoreThree_State.number--;
    }
    