import React from "react";

const AboutPage = () => (
    <>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Crawling Cycle</h5>
                <p className="card-text">
                    In order to work with Apache Nutch, the crawling cycle must
                    be grasped. One crawl cycle consists of five steps: Inject,
                    Generate, Fetch, Parse and Update DB. Execution and
                    completion of all five steps make one crawl cycle. Every
                    single step of the cycle is implemented as one MapReduce
                    job.
                </p>
            </div>
        </div>
        <br />
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">INJECT</h5>
                <p className="card-text">
                    There are two types of URLs to start crawling. The first one
                    is the seed urls. The main target. Usually it is the website
                    that the user would like to crawl. As a first action, the
                    seed urls must be injected. This action also initializes the
                    CrawlDB.
                    <br />
                    The second type of url is the internal or external links
                    that are collected in the previous cycle and it will be
                    crawled in the next cycle.
                </p>
            </div>
        </div>
        <br />
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">GENERATE</h5>
                <p className="card-text">
                    Selecting URLs from CrawlDb and generating a fetch list
                    (these lists are called segments) for all of the pages due
                    to be fetched. In the server, a new segment directory is
                    created and the list is placed there. <br />
                    The “generate” command could have some arguments to change
                    the behavior. Normally this command prepares a list from all
                    of the unfetched pages, or the ones where the fetch interval
                    has already expired. However, with the [-topN N] parameter,
                    It could be combined with a scoring filter and you could
                    generate N urls with the highest score. This way,
                    potentially the most interesting ones would be prioritized
                    for fetching.
                </p>
            </div>
        </div>
        <br />
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">FETCH</h5>
                <p className="card-text">
                    Fetching stage is where the crawling happens. It is a
                    multi-threaded, high throughput action. Apache Nutch is fast
                    and largely scalable, which may cause some issues with the
                    process and with the target that is being crawled. It is
                    recommended to fetch action to be polite to the target
                    website and respect robots.txt rules. Also it is a good
                    practice to have a delay between cycles. Otherwise, spamming
                    a website may cause getting banned. In this scenario, the
                    user may prefer to use proxy settings.
                </p>
            </div>
        </div>
        <br />
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">PARSE</h5>
                <p className="card-text">
                    The action of getting a segment’s fetched content and
                    turning it to ParsedData is called parsing. This data
                    includes text of the data and its outlinks if available. The
                    links from this step are put back into the crawl db, to
                    update the page rank and web links details, in the crawldb
                    update job.
                </p>
            </div>
        </div>
        <br />
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">UPDATE DB</h5>
                <p className="card-text">
                    After fetching and parsing the target urls, the crawldb
                    should be updated with new URLs extracted from previously
                    fetched pages at the end of each crawl cycle. This command
                    also updates the status, score and signature of the links.
                </p>
            </div>
        </div>
        <br />
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">INVERT LINKS</h5>
                <p className="card-text">
                    Inverting links is not part of the crawling cycle but it is
                    necessary to use Apache Solr for indexing. The link
                    database, or linkdb, contains the list of known links to
                    each URL, including both the source URL and anchor text of
                    the link. It maintains an inverted link map, listing
                    incoming links for each url. Before indexing we first invert
                    all of the links, so that we may index incoming anchor text
                    with the pages.
                </p>
            </div>
        </div>
        <br />
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">INDEX</h5>
                <p className="card-text">
                    Indexing is not part of the crawling cycle but it is the
                    flow of data. Indexing is taking all of that hard work from
                    Nutch and putting it into a searchable interface. At this
                    step, the information from parsed data at segments are
                    structured into fields. Apache Nutch uses "NutchDocument"
                    data type to store the structured data, Nutch sends this
                    data to indexing storage which is Apache Solr. This is the
                    last step, at this stage you can remove the segments if you
                    do not want to send them again to indexing storage.{" "}
                </p>
            </div>
        </div>
        <br />
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">DEDUPLICATE</h5>
                <p className="card-text">
                    Duplicate pages are considered as identical content but
                    different URLs. This dedupe command takes a path to a
                    crawldb as a parameter and searches for duplicates based on
                    the document signature. If more than one entries share the
                    same signature, the one with the highest score is kept.
                    There is a configuration option to mark duplicates in the
                    CrawlDb. The marked duplicates are deleted later in the Solr
                    index. This sanitizing works with document signatures.{" "}
                </p>
            </div>
        </div>
        <br />
    </>
);

export default AboutPage;
