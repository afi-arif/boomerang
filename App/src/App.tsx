import React, { FC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import './styles/styles.scss';
import Layout from "./pages/layout";
import Home from "./pages/home/home";
import Contact from "./pages/contact/contact";

const App: FC = () => {

    return (
        <Layout>
            <Switch>
                <Redirect exact path="/" to="/home" />
                <Route path="/home" component={Home} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </Layout>
    )

};

export default App;