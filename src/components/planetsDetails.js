import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MainItems from './MainItems'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchPlanetDetails } from '../actions/planetDetailsAction';
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


export default function PlanetsDetails(props) {
  
  console.log("In planetDetails ")
  const dispatch = useDispatch();
  const planetDetails = useSelector(state => state.planetsDetailsReducer.planetDetails);
  const loading = useSelector(state => state.planetsDetailsReducer.loading);
  
  //DISPATCHING ACTION FOR GETTING Movies DETAILS FROM THE ID
  useEffect(() => {
    dispatch(fetchPlanetDetails());
  }, [] );

  useEffect(() => {
    console.log("In JS file: ", planetDetails)
  },[planetDetails])
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
    <MainItems text={"Planets"} />
    <TextField disabled id="standard-disabled" label="Title" defaultValue={planetDetails.name}  />
    <TextField disabled id="standard-disabled" label="Terrain" defaultValue={planetDetails.terrain} />
    <TextField disabled id="standard-disabled" label="Population" defaultValue={planetDetails.population} />
  </div>)
}

}
  

  