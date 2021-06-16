import * as types from "./actionTypes";
import * as crawApi from "../../api/crawlApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadJobs() {
    return function (dispatch) {
        dispatch(beginApiCall());
        return crawApi
            .getJobs()
            .then((jobs) => {
                dispatch({
                    type: types.LOAD_JOBS_SUCCESS,
                    jobs,
                });
            })
            .catch((error) => {
                dispatch(apiCallError(error));
                throw error;
            });
    };
}

export function createJob(job) {
    //eslint-disable-next-line no-unused-vars
    return function (dispatch) {
        dispatch(beginApiCall());
        return crawApi
            .postCreateJob(job)
            .then((createdJob) => {
                dispatch({
                    type: types.CREATE_JOB_SUCCESS,
                    job: createdJob,
                });
            })
            .catch((error) => {
                dispatch(apiCallError(error));
                throw error;
            });
    };
}

export function deleteJob(jobId) {
    //eslint-disable-next-line no-unused-vars
    return function (dispatch) {
        dispatch(beginApiCall());
        return crawApi
            .deleteJob(jobId)
            .then(() => {
                dispatch({
                    type: types.STOP_JOB_SUCCESS,
                    jobId: jobId,
                });
            })
            .catch((error) => {
                dispatch(apiCallError(error));
                throw error;
            });
    };
}
