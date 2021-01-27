import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import PeopleList from './components/peopleList'
import ItemsButton from './components/ItemsButton'
import PersonDetails from './components/personDetails'
import MoviesList from './components/moviesList'
// import { createBrowserHistory } from 'history'; 

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={ItemsButton} />
                    <Route path="/people" exact component={PeopleList} />
                    <Route path="/persondetails" exact component={PersonDetails} />
                    <Route path="/movies" exact component={MoviesList} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;