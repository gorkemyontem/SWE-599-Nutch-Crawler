import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function jobReducer(state = initialState.jobs, action) {
    switch (action.type) {
        case types.LOAD_JOBS_SUCCESS:
            return action.jobs;
        case types.CREATE_JOB_SUCCESS:
            return [...state, { ...action.job }];
        default:
            return state;
    }
}