import React, { useEffect, useState } from "react";
import { getResults } from "../../api/solrApi";
export function SolrPage({ createSeed, history, ...props }) {
    let [data, setData] = useState([]);
    const [startTime, setStartTime] = useState("2021-06-18T00:00");
    const [endTime, setEndTime] = useState("2021-06-20T00:00");
    const [query, setQuery] = useState("*:*");

    function getURL(url) {
        const res = url.match(/\.(jpeg|jpg|gif|png|svg)$/);
        return res[1].toUpperCase();
    }

    function checkURL(url) {
        const res = url.match(/\.(jpeg|jpg|gif|png|svg)$/);
        return res != null;
    }

    useEffect(() => {
        getResults(query).then((el) => setData(el.response));
    }, [query]);

    useEffect(() => {
        getResults()
            .then((el) => {
                const a = el.response?.docs?.filter(
                    (doc) =>
                        new Date(doc.tstamp) > new Date(startTime) &&
                        new Date(doc.tstamp) < new Date(endTime)
                );
                return {
                    numFound: a.length,
                    docs: a,
                };
            })
            .then((res) => setData(res));
    }, [startTime, endTime]);

    return (
        <>
            <div className="jumbotron">
                <p>
                    Solr results displayed here. In Total{" "}
                    <strong>{data ? data.numFound : 0}</strong> url crawled so
                    far.
                </p>
                <div>
                    Start Date: &nbsp;
                    <input
                        type="datetime-local"
                        id="start-time"
                        name="start-time"
                        min="2021-06-18T00:00"
                        max="2021-06-25T00:00"
                        value={startTime}
                        onChange={(event) => setStartTime(event.target.value)}
                    />{" "}
                    &nbsp; End Date: &nbsp;
                    <input
                        type="datetime-local"
                        id="end-time"
                        name="end-time"
                        min="2021-06-18T00:00"
                        max="2021-06-25T00:00"
                        value={endTime}
                        onChange={(event) => setEndTime(event.target.value)}
                    />
                </div>
                <br />
                <div>
                    Search: &nbsp;
                    <input
                        type="text"
                        name="query"
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                    />
                </div>
            </div>
            <div className="row">
                {data &&
                    data.docs &&
                    data.docs.map((doc, index) => (
                        <div className="col-12" key={doc.url}>
                            <div
                                className="card"
                                style={{ marginBottom: "2rem" }}
                            >
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {index + 1} -{" "}
                                        {checkURL(doc.url)
                                            ? getURL(doc.url) + " file"
                                            : doc.title
                                            ? doc.title
                                            : "not indexed"}
                                    </h5>
                                    <h6 className="card-subtitle mb-2 text-muted">
                                        {new Date(doc.tstamp).toLocaleString()}
                                    </h6>
                                    <p className="card-text">
                                        {checkURL(doc.url) ? (
                                            <img
                                                alt="not text content"
                                                src={doc.url}
                                            />
                                        ) : doc.content ? (
                                            doc.content.slice(0, 300) + "..."
                                        ) : (
                                            "not indexed"
                                        )}
                                    </p>
                                    <a
                                        href={doc.url}
                                        target="blank"
                                        className="card-link"
                                    >
                                        Go to crawled url <br /> ({doc.url})
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
}

export default SolrPage;
