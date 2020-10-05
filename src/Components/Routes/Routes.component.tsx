import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import routesConfig from '../Routes/Route.config';
import IRoute from './Route.interface';
import AppHeader from '../Presentational/Layout/Header/Header.component';
const AppRoute: React.FC = () => {
    return (
        <Router>
            <AppHeader />
            <Switch>
                {
                    routesConfig.map((route: IRoute, i) => (
                        <Route key={i}
                            path={route.path}
                            component={route.component}
                        ></Route>
                    ))
                }
                <Redirect from="/" exact to="home" />
            </Switch>
        </Router>
    )
}

export default AppRoute;