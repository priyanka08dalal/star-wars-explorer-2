import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import MainItems from './MainItems'
import { connect, useDispatch, useSelector } from 'react-redux'
import { fetchPeople } from '../actions/peopleActions';
import { useEffect } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ImageIcon from '@material-ui/icons/Image';
// import { useHistory } from "react-router-dom";
// import { createBrowserHistory } from 'history';
import { withRouter } from 'react-router-dom'
import React, { useState, useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    width: '100%',
    maxWidth: 360,
    direction: 'row',
    padding: 0,
    display: 'inline-block',
    backgroundColor: theme.palette.background.paper,
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  
}));

function PeopleList( ) {
  function getPeopleDetails() {
    const history = useHistory();
    history.push('/persondetails')
  }
  console.log("peopleList")
  const dispatch = useDispatch();
  const people = useSelector(state => state.peopleReducer.people)
  console.log(people)
  useEffect(() => {
    dispatch(fetchPeople());
  },[] )

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MainItems text={"People"} />
      {people.length>0 && people.map ((p,i) => {
        return(<List className={classes.root} key = {i}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={p.name} onClick={getPeopleDetails} />
          </ListItem>
        </List>)
      })}
    </div>
  );
}


// const mapStateToProps = state => {
//   return {
//     peopleData: state.people
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchPeople: () => dispatch(fetchPeople())
//   }
// }

export default connect() (withRouter(PeopleList));
