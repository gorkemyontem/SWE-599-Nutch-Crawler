import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import Header from "./components/common/Header";
import PageNotFound from "./components/PageNotFound";
import CoursesPage from "./components/courses/CoursesPage";
import CrawlPage from "./components/crawl/CrawlPage";
import CreateSeedPage from "./components/create-seed/CreateSeedPage";
import CreateJobPage from "./components/create-job/CreateJobPage";
import ManageCoursePage from "./components/courses/ManageCoursePage"; // eslint-disable-line import/no-named-as-default
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <div className="container">
            <Header />
            <br />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/crawl" component={CrawlPage} />
                <Route path="/create-seed" component={CreateSeedPage} />
                <Route path="/create-job" component={CreateJobPage} />
                <Route path="/courses" component={CoursesPage} />
                <Route path="/course/:slug" component={ManageCoursePage} />
                <Route path="/course" component={ManageCoursePage} />
                <Route component={PageNotFound} />
            </Switch>
            <ToastContainer autoClose={3000} hideProgressBar />
        </div>
    );
}

export default App;
