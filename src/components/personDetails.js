import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import MainItems from "./MainItems";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPersonDetails } from "../actions/personDetailAction";
import CircularProgress from "@material-ui/core/CircularProgress";
import Link from '@material-ui/core/Link'
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Divider from "@material-ui/core/Divider";
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      flexGrow: 1,
      width: "100%",
      spacing: "30",
      // padding: "10%",
    },
  },
}));

export default function PersonDetails(props) {
  const dispatch = useDispatch();
  const persondetail = useSelector(
    (state) => state.personDetailsReducer.personDetails
  );
  const loading = useSelector((state) => state.personDetailsReducer.loading);
  const history = useHistory();
  const handleClickRoute = () => history.push('/')

  //DISPATCHING ACTION FOR GETTING PERSON DETAILS FROM THE ID
  useEffect(() => {
    dispatch(fetchPersonDetails());
  }, []);

  useEffect(() => {}, [persondetail]);
  const classes = useStyles();
  if (loading) {
    return (
      <CircularProgress
        variant="indeterminate"
        disableShrink
        className={classes.top}
        classes={{
          circle: classes.circle,
        }}
        size={40}
        thickness={4}
        {...props}
      />
    );
  } else {
    return (
      <div className={classes.root}>
        <MainItems text={"People"} />
        <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/" onClick={handleClickRoute}>
          Home
        </Link>
        <Typography color="textPrimary">People List</Typography>
      </Breadcrumbs>
        <TextField
          // disabled
          id="standard-disabled"
          label="Name"
          defaultValue={persondetail.name}
        />
        <TextField
          // disabled
          id="standard-disabled"
          label="Height"
          defaultValue={persondetail.height}
        />
        <TextField
          // disabled
          id="standard-disabled"
          label="Mass"
          defaultValue={persondetail.mass}
        />
        <TextField
          // disabled
          id="standard-disabled"
          label="Hair Color"
          defaultValue={persondetail.hair_color}
        />
        <TextField
          // disabled
          id="standard-disabled"
          label="Eye Color"
          defaultValue={persondetail.eye_color}
        />
        <TextField
          // disabled
          id="standard-disabled"
          label="Birth Year"
          defaultValue={persondetail.birth_year}
        />
        <TextField
          // disabled
          id="standard-disabled"
          label="Gender"
          defaultValue={persondetail.gender}
        />
      </div>
    );
  }
}
