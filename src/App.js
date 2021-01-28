import React, { Component } from 'react';
// import Header from './Header'
import ItemsButton from './components/ItemsButton'
// import PeopleList from './components/ItemsButton'
import {  Switch, Route } from "react-router-dom";
import PeopleList from './components/peopleList'
import PersonDetails from './components/personDetails'
import MoviesList from './components/moviesList'
import MoviesDetails from './components/moviesDetails'
import PlanetsList from './components/planetsList'
// import ItemsButton from './components/ItemsButton'

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" exact component={ItemsButton} />
                    <Route path="/people" exact component={PeopleList} />
                    <Route path="/persondetails" exact component={PersonDetails} />
                    <Route path="/films" exact component={MoviesList} />
                    <Route path="/filmsdeails" exact component={MoviesDetails} />
                    <Route path="/planets" exact component={PlanetsList} />
                </Switch>
                {/* <Header /> */}
                {/* <ItemsButton /> */}
            </div>
        );
    }
}

export default App;