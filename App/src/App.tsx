import React, { FC, ReactElement } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import './styles/styles.scss';
import Layout from "./pages/layout";
import Home from "./pages/home/home";
import AboutUs from "./pages/about-us/about-us";
import WhatWeDo from "./pages/what-we-do/what-we-do";
import Contact from "./pages/contact/contact";
import Projects from "./pages/projects/projects";

const App: FC = (): ReactElement => {

    return (
        <Layout>
            <Switch>
                <Redirect exact path="/" to="/home" />
                <Route path="/home" component={Home} />
                <Route path="/about-us" component={AboutUs} />
                <Route path="/what-we-do" component={WhatWeDo} />
                <Route path="/contact" component={Contact} />
                <Route path="/projects" component={Projects} />
            </Switch>
        </Layout>
    )

};

export default App;