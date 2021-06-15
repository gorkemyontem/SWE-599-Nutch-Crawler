import * as types from "./actionTypes";
import * as crawApi from "../../api/crawlApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadSeeds() {
    //eslint-disable-next-line no-unused-vars
    return function (dispatch) {
        dispatch(beginApiCall());
        return crawApi
            .getSeeds()
            .then((seeds) => {
                dispatch({
                    type: types.LOAD_SEED_SUCCESS,
                    seeds,
                });
            })
            .catch((error) => {
                dispatch(apiCallError(error));
                throw error;
            });
    };
}

export function createSeed(seed) {
    //eslint-disable-next-line no-unused-vars
    return function (dispatch) {
        dispatch(beginApiCall());
        return crawApi
            .postCreateSeed(seed)
            .then((seedId) => {
                seed["seedFilePath"] = seedId;
                seed["seedUrls"] = seed["seedUrls"].map((item) => ({
                    id: null,
                    url: item,
                }));
                dispatch({
                    type: types.CREATE_SEED_SUCCESS,
                    seed,
                });
            })
            .catch((error) => {
                dispatch(apiCallError(error));
                throw error;
            });
    };
}
