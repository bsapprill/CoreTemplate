
import { createReducer } from "../app.reducer-utility";

export const CoreOne_Reducer = createReducer(0, {
    INCREMENT_STATEONE: Increment_StateOne,
    DECREMENT_STATEONE: Decrement_StateOne,
});

    function Increment_StateOne(CoreOne_State) {
        return CoreOne_State.number++;
    }

    function Decrement_StateOne(CoreOne_State) {
        return CoreOne_State.number--;
    }
