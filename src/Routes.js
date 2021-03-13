import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Library } from "./views/Library";

// Application routes
export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Library} />
            </Switch>
        </BrowserRouter>
    );
};
