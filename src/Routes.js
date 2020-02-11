import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from './Home/Home';

export default function Routes(){
    return (
        <switch>
            <Route path="/" exact component={Home} />
        </switch>
    );
}