import React, { Component } from 'react';
import {Button} from "@material-ui/core"
import MainItems from './MainItems'
import { createBrowserHistory } from 'history';
import { withRouter } from 'react-router-dom'
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    root: {
      '& > *': {
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
            name: '',
            title: ''
            // avtar: ''
        }
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        this.handleClickMovies = this.handleClickMovies.bind(this);
        this.handleClickPlanets = this.handleClickPlanets.bind(this);
      }
    
      handleClick() {
          // window.open("/people")
          this.props.history.push('/people')
          this.setState({PeopleList: true})
          console.log("Button clicked")
      }

      handleClickMovies() {
        // window.open("/people")
        this.props.history.push('/films')
        this.setState({MoviesList: true})
        console.log("Button clicked")
    }

    handleClickPlanets() {
        // window.open("/people")
        this.props.history.push('/planets')
        this.setState({PlanetsList: true})
        console.log("Button clicked")
    }


      

    render() {
        // const classes = useStyles();
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <MainItems text={"Star Wars Explorer"} />
                <div>
                    <Button variant="contained" color="primary" onClick={this.handleClick}>
                        People
                    </Button>
                </div>
                <div>
                    <Button variant="contained" size="medium" color="primary" onClick={this.handleClickMovies}>
                        Movies
                    </Button>
                </div>
                <div>
                     <Button variant="contained" color="primary" onClick={this.handleClickPlanets}>
                         Planet
                    </Button>
                </div>
                
            </div>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//       peopleData: state.people
//     }
//   }
  
//   const mapDispatchToProps = dispatch => {
//     return {
//       fetchPeople: () => dispatch(fetchPeople())
//     }
//   }
  
//   export default connect(
//     mapStateToProps,
//     mapDispatchToProps
//   );  withRouter(ItemsButton, createBrowserHistory())

export default withStyles(styles) (withRouter(ItemsButton, createBrowserHistory()));