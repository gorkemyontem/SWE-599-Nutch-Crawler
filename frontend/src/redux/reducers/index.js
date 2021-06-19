import { combineReducers } from "redux";
import serverStatus from "./serverStatusReducer";
import apiCallsInProgress from "./apiStatusReducer";
import jobs from "./jobReducer";
import seeds from "./seedReducer";
import config from "./configReducer";

const rootReducer = combineReducers({
    apiCallsInProgress,
    serverStatus,
    jobs,
    seeds,
    config,
});

export default rootReducer;
