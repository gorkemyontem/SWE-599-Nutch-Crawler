import * as types from "./actionTypes";
import * as crawApi from "../../api/crawlApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadServerStatus() {
    return function (dispatch) {
        dispatch(beginApiCall());
        return crawApi
            .getServerStatus()
            .then((serverStatus) => {
                console.log(serverStatus);
                dispatch({
                    type: types.LOAD_SERVER_STATUS_SUCCESS,
                    serverStatus,
                });
            })
            .catch((error) => {
                dispatch(apiCallError(error));
                throw error;
            });
    };
}

export function loadConfig() {
    return function (dispatch) {
        dispatch(beginApiCall());
        return crawApi
            .getConfig()
            .then((config) => {
                dispatch({
                    type: types.LOAD_CONFIG_SUCCESS,
                    config,
                });
            })
            .catch((error) => {
                dispatch(apiCallError(error));
                throw error;
            });
    };
}
