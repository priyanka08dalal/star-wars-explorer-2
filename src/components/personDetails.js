import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MainItems from './MainItems'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchPersonDetails } from '../actions/personDetailAction';
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


export default function PersonDetails(props) {
  
  const dispatch = useDispatch();
  const persondetail = useSelector(state => state.personDetailsReducer.personDetails);
  const loading = useSelector(state => state.personDetailsReducer.loading);
  
  //DISPATCHING ACTION FOR GETTING PERSON DETAILS FROM THE ID
  useEffect(() => {
    dispatch(fetchPersonDetails());
  }, [] );

  useEffect(() => {
    console.log("In JS file: ", persondetail)
  },[persondetail])
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
    <MainItems text={"People"} />
    <TextField disabled id="standard-disabled" label="Height" defaultValue={persondetail.height}  />
    <TextField disabled id="standard-disabled" label="Mass" defaultValue={persondetail.mass} />
    <TextField disabled id="standard-disabled" label="Hair Color" defaultValue={persondetail.hair_color} />
    <TextField disabled id="standard-disabled" label="Eye Color" defaultValue={persondetail.eye_color} />
    <TextField disabled id="standard-disabled" label="Birth Year" defaultValue={persondetail.birth_year} />
    <TextField disabled id="standard-disabled" label="Gender" defaultValue={persondetail.gender} />
  </div>)
}

}
  

  