import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import MainItems from "./MainItems";
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchPlanet } from "../actions/planetAction";
import { useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ImageIcon from "@material-ui/icons/Image";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import { useHistory } from 'react-router-dom';
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // maxWidth: 360,
    direction: "row",
    padding: 0,
    display: "inline-block",
    backgroundColor: theme.palette.background.paper,
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function PlanetsList() {
  const dispatch = useDispatch();
  const planet = useSelector((state) => state.planetsReducer.planet);
  const [selectedIndex] = React.useState(1);
  const history = useHistory();
  const handleClick = (e, i) => history.push(`/planetsdetails/${i}`);
  const handleClickRoute = () => history.push('/')

  useEffect(() => {
    dispatch(fetchPlanet());
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MainItems text={"Planets"} />
      <Box m={6} pl={2} pt={1}>
      <Breadcrumbs aria-label="breadcrumb" >
        <Link color="inherit" href="/" onClick={handleClickRoute}>
          Home
        </Link>
        <Typography color="textPrimary">Planets List</Typography>
      </Breadcrumbs>
      </Box>
      {planet &&
        planet.length > 0 &&
        planet.map((p, i) => {
          return (
            <List
              className={classes.root}
              key={i}
              component="nav"
              aria-label="main mailbox folders"
            >
              {/* <ListItem> */}
              <ListItem
                button
                selected={selectedIndex === 1}
                onClick={(e) => handleClick(e, i)}
              >
                <ListItemAvatar>
                  <Avatar src="./avatar.jpeg">{/* <ImageIcon /> */}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={p.name} />

                <Typography>
                  {/* <Link to="/persondetails">{p.name}</Link> */}
                  <Divider variant="inset" component="li" />
                </Typography>
              </ListItem>
              <Divider />
              
            </List>
          );
        })}
    </div>
  );
}

export default connect()(PlanetsList);
