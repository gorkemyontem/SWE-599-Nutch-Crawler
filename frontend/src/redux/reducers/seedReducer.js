import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function seedReducer(state = initialState.seeds, action) {
    switch (action.type) {
        case types.LOAD_SEED_SUCCESS:
            return action.seeds;
        case types.CREATE_SEED_SUCCESS:
            return { ...state, [action.seed.name]: action.seed };
        default:
            return state;
    }
}
