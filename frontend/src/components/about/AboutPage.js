import React from "react";

const AboutPage = () => (
    <>
        <div className="card text-center">
            <div className="card-body">
                <h5 className="card-title">Frontend Stack</h5>
                <p className="card-text">
                    This app uses React, Redux, React Router, and many other
                    helpful libraries.
                </p>
            </div>
            <div className="card-footer text-muted">2 days ago</div>
        </div>
        <br />
        <div className="card text-center">
            <div className="card-body">
                <h5 className="card-title">Backend Stack</h5>
                <p className="card-text">TODO</p>
            </div>
            <div className="card-footer text-muted">2 days ago</div>
        </div>
        <br />
        <div className="card text-center">
            <div className="card-body">
                <h5 className="card-title">Nutch Stack</h5>
                <div className="card-text"></div>
            </div>
            <div className="card-footer text-muted">2 days ago</div>
        </div>
        <div className="card">
            <div className="card-body">
                <ul>
                    <li>
                        The crawl database, or crawldb. This contains&nbsp;
                        <strong>information about every URL known</strong> to
                        Nutch, including whether it was fetched, and, if so,
                        when.
                    </li>
                    <li>
                        The link database, or linkdb. This contains the list of
                        known links to each URL, including both the source&nbsp;
                        <strong>URL and anchor text of the link.</strong>
                    </li>
                    <li>
                        A set of segments.&nbsp;
                        <strong>
                            Each segment is a set of URLs that are fetched as a
                            unit.
                        </strong>
                        &nbsp; Segments are directories with the following
                        subdirectories:
                        <ul>
                            <li>
                                a crawl_generate names a set of URLs to be
                                fetched
                            </li>
                            <li>
                                a crawl_fetch contains the status of fetching
                                each URL
                            </li>
                            <li>
                                a content contains the raw content retrieved
                                from each URL
                            </li>
                            <li>
                                a parse_text contains the parsed text of each
                                URL
                            </li>
                            <li>
                                a parse_data contains outlinks and metadata
                                parsed from each URL
                            </li>
                            <li>
                                a crawl_parse contains the outlink URLs, used to
                                update the crawldb
                            </li>
                        </ul>
                    </li>
                </ul>
                <img src="Nutch_Overview.png" width="900" alt="nutch" />
            </div>
        </div>
    </>
);

export default AboutPage;
