import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import PagesRedeSocialPainel from './RedeSocial/Painel/Painel';


const Root = () => {
    return(
        <Router>
            <Switch>
                <Route path="/" component={PagesRedeSocialPainel} />
            </Switch>
        </Router>
    )
}

export default Root;