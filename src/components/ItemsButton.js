import React, { Component } from "react";
import { Button } from "@material-ui/core";
import MainItems from "./MainItems";
import { createBrowserHistory } from "history";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
});
class ItemsButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PeopleList: true,
      MoviesList: true,
      PlanetsList: true,
      name: "",
      title: "",
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.handleClickMovies = this.handleClickMovies.bind(this);
    this.handleClickPlanets = this.handleClickPlanets.bind(this);
  }

  handleClick() {
    this.props.history.push("/people"); // Use history.push to define route
    this.setState({ PeopleList: true });
  }

  handleClickMovies() {
    this.props.history.push("/films"); // Use history.push to define route
    this.setState({ MoviesList: true });
  }

  handleClickPlanets() {
    this.props.history.push("/planets"); // Use history.push to define route
    this.setState({ PlanetsList: true });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <MainItems text={"Star Wars Explorer"} />
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleClick}
          >
            People
          </Button>
        </div>
        <div>
          <Button
            variant="contained"
            size="medium"
            color="primary"
            onClick={this.handleClickMovies}
          >
            Movies
          </Button>
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleClickPlanets}
          >
            Planet
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(
  withRouter(ItemsButton, createBrowserHistory())
);
