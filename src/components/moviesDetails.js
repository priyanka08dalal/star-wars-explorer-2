import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MainItems from './MainItems'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchMoviesDetails } from '../actions/moviesDetailsAction';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      flexGrow: 1,
      width: '100%',
      spacing: '30'
    },
  },
}));


export default function MoviesDetails(props) {
  
  const dispatch = useDispatch();
  const MoviesDetails = useSelector(state => state.moviesDetailsReducer.MoviesDetails);
  const loading = useSelector(state => state.moviesDetailsReducer.loading);
  
  //DISPATCHING ACTION FOR GETTING Movies DETAILS FROM THE ID
  useEffect(() => {
    dispatch(fetchMoviesDetails());
  }, [] );

  useEffect(() => {
    console.log("In JS file: ", MoviesDetails)
  },[MoviesDetails])
  const classes = useStyles();
  if (loading) {
    console.log("if")
    return(<CircularProgress
    variant="indeterminate"
    disableShrink
    className={classes.top}
    classes={{
      circle: classes.circle,
    }}
    size={40}
    thickness={4}
    {...props}
  />)
} else {
  console.log("else")
  return(
  <div className={classes.root}>
    <MainItems text={"Movies"} />
    <TextField disabled id="standard-disabled" label="Height" defaultValue={MoviesDetails.title}  />
    <TextField disabled id="standard-disabled" label="Mass" defaultValue={MoviesDetails.director} />
    <TextField disabled id="standard-disabled" label="Hair Color" defaultValue={MoviesDetails.producers} />
  </div>)
}

}
  

  