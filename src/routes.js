import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/search' component={Catalog} />
            </Switch>
        </BrowserRouter>
    );
}