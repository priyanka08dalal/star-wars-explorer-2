import React, { Component } from 'react';
// import Header from './Header'
import ItemsButton from './components/ItemsButton'
// import PeopleList from './components/ItemsButton'
import {  Switch, Route } from "react-router-dom";
import PeopleList from './components/peopleList'
// import ItemsButton from './components/ItemsButton'

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" component={ItemsButton} />
                    <Route path="/people" component={PeopleList} />
                </Switch>
                {/* <Header /> */}
                {/* <ItemsButton /> */}
            </div>
        );
    }
}

export default App;