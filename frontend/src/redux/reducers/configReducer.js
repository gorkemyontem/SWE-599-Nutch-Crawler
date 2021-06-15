import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function configReducer(state = initialState.config, action) {
    switch (action.type) {
        case types.LOAD_CONFIG_SUCCESS:
            return action.config;
        default:
            return state;
    }
}
