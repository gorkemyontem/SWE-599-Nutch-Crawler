import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import serverStatus from "./serverStatusReducer";
import apiCallsInProgress from "./apiStatusReducer";
import jobs from "./jobReducer";
import seeds from "./seedReducer";
import config from "./configReducer";

const rootReducer = combineReducers({
    courses,
    authors,
    apiCallsInProgress,
    serverStatus,
    jobs,
    seeds,
    config,
});

export default rootReducer;
