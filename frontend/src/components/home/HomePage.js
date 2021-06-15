import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
    <div className="jumbotron">
        <h1 className="display-5">SWE 599 - Crawler Application with Apache Nutch</h1>
        <p className="lead">Web crawler UI project by Gökmen Görkem Yöntem - 2019719189</p>
        <hr className="my-4" />
        <p>
            <strong>About Apache Nutch™:</strong> A well matured, production ready crawler. 1.x enables fine grained configuration, relying on Apache Hadoop™ data structures, which are great for batch processing. Nutch also provides
            extensible interfaces such as Parse, Index and ScoringFilter&apos;s for custom implementations e.g. uses Apache Tika™ for parsing.
        </p>
        <p>
            <strong>About Apache Solr™:</strong> An open source enterprise search platform built on Apache Lucene™. Solr is highly reliable, scalable and fault tolerant, providing distributed indexing, replication and load-balanced
            querying, automated failover and recovery, centralized configuration and more. Solr powers the search and navigation features of many of the world&apos;s largest internet sites.
        </p>
        <Link to="about" className="btn btn-primary btn-lg">
            Learn more
        </Link>
    </div>
);

export default HomePage;
