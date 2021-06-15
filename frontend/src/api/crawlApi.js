import { handleResponse, handleError } from "./apiUtils";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:4545",
});

export function getServerStatus() {
    return axiosInstance.get("/admin").then(handleResponse).catch(handleError);
}

export function postCreateJob(job) {
    return axiosInstance
        .post("/job/create", job)
        .then(handleResponse)
        .catch(handleError);
}

export function getConfig() {
    return axiosInstance.get("/config").then(handleResponse).catch(handleError);
}

export function getJobs() {
    return axiosInstance.get("/job").then(handleResponse).catch(handleError);
}
