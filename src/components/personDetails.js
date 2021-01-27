import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MainItems from './MainItems'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
      spacing: '30'
    },
  },
}));

export default function PersonDetails() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <MainItems text={"People"} />
        <TextField disabled id="standard-disabled" label="Height" defaultValue="Hello World" />
        <TextField disabled id="standard-disabled" label="Mass" defaultValue="Hello World" />
        <TextField disabled id="standard-disabled" label="Hair Color" defaultValue="Hello World" />
        <TextField disabled id="standard-disabled" label="Eye Color" defaultValue="Hello World" />
        <TextField disabled id="standard-disabled" label="Birth Year" defaultValue="Hello World" />
        <TextField disabled id="standard-disabled" label="Gender" defaultValue="Hello World" />
      </div>
    </form>
  );
}
