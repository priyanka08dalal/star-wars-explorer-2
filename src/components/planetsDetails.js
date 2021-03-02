import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import MainItems from "./MainItems";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPlanetDetails } from "../actions/planetDetailsAction";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Box } from "@material-ui/core";
import Link from '@material-ui/core/Link'
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Divider from "@material-ui/core/Divider";
import { useHistory, useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      flexGrow: 1,
      width: "100%",
      spacing: "30",
    },
  },
}));

export default function PlanetsDetails(props) {
  const dispatch = useDispatch();
  const planetDetails = useSelector(
    (state) => state.planetsDetailsReducer.planetDetails
  );
  const loading = useSelector((state) => state.planetsDetailsReducer.loading);
  const history = useHistory();
  const handleClickRoute = () => history.push('/')
  const handleClickRoutePeople = () => history.push('/planets')

  const { id } = useParams();

  //DISPATCHING ACTION FOR GETTING Movies DETAILS FROM THE ID
  useEffect(() => {
    dispatch(fetchPlanetDetails(id+1));
  }, []);

  useEffect(() => {}, [planetDetails]);
  const classes = useStyles();
  if (loading) {
    return (
      <div>
      <CircularProgress
        variant="indeterminate"
        disableShrink
        className={classes.top}
        classes={{
          circle: classes.circle,
        }}
        size={40}
        left={20}
        style={{
          position: 'relative', left: '50%', top: '50%',
          transform: 'translateX(-50%)'
      }}
        thickness={6}
        {...props}
      />
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <MainItems text={"Planets"} />
        <Box m={2}>
        <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/" onClick={handleClickRoute}>
          Home
        </Link>
        <Link color="inherit" href="/planets
        "onClick={handleClickRoutePeople}>
          Planets List
        </Link>
        <Typography color="textPrimary">Planets Details</Typography>
      </Breadcrumbs>
      </Box>
      <Box m={6} pl={2} pt={0}>
      <Typography color="textPrimary">{planetDetails.name}</Typography>
        <TextField
          id="standard-disabled"
          label="Title"
          defaultValue={planetDetails.name}
        />
        <TextField
          id="standard-disabled"
          label="Terrain"
          defaultValue={planetDetails.terrain}
        />
        <TextField
          id="standard-disabled"
          label="Population"
          defaultValue={planetDetails.population}
        />
        </Box>
      </div>
    );
  }
}
