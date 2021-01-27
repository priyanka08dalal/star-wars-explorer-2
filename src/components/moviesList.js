import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import MainItems from './MainItems'
import { connect, useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../actions/moviesAction';
import { useEffect } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ImageIcon from '@material-ui/icons/Image';
// import { useHistory } from "react-router-dom";
// import { createBrowserHistory } from 'history';
// import { withRouter } from 'react-router-dom'

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

function MovieList( ) {
  console.log("moviesList")
  const dispatch = useDispatch();
  const movies = useSelector(state => state.moviesReducer.movies)
  console.log(movies)
  useEffect(() => {
    dispatch(fetchMovies());
  },[] )

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MainItems text={"Movies"} />
      {movies.length>0 && movies.map ((m,i) => {
        return(<List className={classes.root} key = {i}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={m.title} />
          </ListItem>
        </List>)
      })}
    </div>
  );
}

export default connect(

)(MovieList)
