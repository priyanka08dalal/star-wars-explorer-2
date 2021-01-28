import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MainItems from './MainItems'
import { connect, useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchPersonDetails } from '../actions/personDetailAction';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
      spacing: '30'
    },
  },
}));

function PersonDetails() {
  console.log("persondetailList")
  const dispatch = useDispatch();
  const persondetails = useSelector(state => state.persondetailsReducer.persondetails)
  
  useEffect(() => {
    dispatch(fetchPersonDetails());
  },[] )
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <MainItems text={"People"} />
        {persondetails.length>0 && persondetails.map ((p,i) => {
        return(<div><TextField disabled id="standard-disabled" label="Height" defaultValue={p.height} />
        <TextField disabled id="standard-disabled" label="Mass" defaultValue={p.mass} />
        <TextField disabled id="standard-disabled" label="Hair Color" defaultValue={p.hair_color} />
        <TextField disabled id="standard-disabled" label="Eye Color" defaultValue={p.eye_color} />
        <TextField disabled id="standard-disabled" label="Birth Year" defaultValue={p.birth_year} />
        <TextField disabled id="standard-disabled" label="Gender" defaultValue={p.gender} />
        </div>
        )
      })}
      </div>
      
    </form>
  );
}


export default connect(

  ) (PersonDetails);

  