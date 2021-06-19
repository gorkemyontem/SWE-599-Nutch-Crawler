import { handleResponse, handleError } from "./apiUtils";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:4646/solr/nutch",
});

export function getResults(query) {
    return axiosInstance
        .get(
            "/select?q=" +
                query +
                "&rows=2147483647&df=content&sort=title%20desc"
        )
        .then(handleResponse)
        .catch(handleError);
}
