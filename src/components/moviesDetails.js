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

export default function MoviesDetails() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <MainItems text={"Movies"} />
        <TextField disabled id="standard-disabled" label="Title" defaultValue="Hello World" />
        <TextField disabled id="standard-disabled" label="Director" defaultValue="Hello World" />
        <TextField disabled id="standard-disabled" label="Producers" defaultValue="Hello World" />
      </div>
    </form>
  );
}
