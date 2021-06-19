import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import Header from "./components/common/Header";
import PageNotFound from "./components/PageNotFound";
import CrawlHome from "./components/crawl/home/CrawlHome";
import CreateSeedPage from "./components/crawl/create-seed/CreateSeedPage";
import InjectJobPage from "./components/crawl/inject-job/InjectJobPage";
import { ToastContainer } from "react-toastify";

import GenerateJobPage from "./components/crawl/generate/GenerateJobPage";
import FetchJobPage from "./components/crawl/fetch/FetchJobPage";
import ParseJobPage from "./components/crawl/parse/ParseJobPage";
import IndexJobPage from "./components/crawl/index/IndexJobPage";
import UpdateDbJobPage from "./components/crawl/update-db/UpdateDbJobPage";
import InvertLinksJobPage from "./components/crawl/invert-links/InvertLinksJobPage";
import DedupeJobPage from "./components/crawl/dedupe/DedupeJobPage";
import SolrPage from "./components/solr/SolrPage";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <div className="container">
            <Header />
            <br />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route exact path="/crawl" component={CrawlHome} />
                <Route path="/crawl/create-seed" component={CreateSeedPage} />
                <Route path="/crawl/inject" component={InjectJobPage} />
                <Route path="/crawl/generate" component={GenerateJobPage} />
                <Route path="/crawl/fetch" component={FetchJobPage} />
                <Route path="/crawl/parse" component={ParseJobPage} />
                <Route path="/crawl/index" component={IndexJobPage} />
                <Route path="/crawl/update-db" component={UpdateDbJobPage} />
                <Route
                    path="/crawl/invert-links"
                    component={InvertLinksJobPage}
                />
                <Route path="/crawl/dedupe" component={DedupeJobPage} />

                <Route path="/solr" component={SolrPage} />

                <Route component={PageNotFound} />
            </Switch>
            <ToastContainer autoClose={3000} hideProgressBar />
        </div>
    );
}

export default App;
