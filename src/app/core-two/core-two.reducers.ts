
import { createReducer } from "../app.reducer-utility";

export const CoreTwo_Reducer = createReducer({}, {
    INCREMENT_STATETWO: Increment_StateTwo,
    DECREMENT_STATETWO: Decrement_StateTwo,
});

    function Increment_StateTwo(CoreTwo_State) {
        return CoreTwo_State.number++;
    }

    function Decrement_StateTwo(CoreTwo_State) {
        return CoreTwo_State.number--;
    }
