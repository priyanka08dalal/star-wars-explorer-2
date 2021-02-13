import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import MainItems from "./MainItems";
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchPeople } from "../actions/peopleActions";
import { useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Link from '@material-ui/core/Link'
import Typography from "@material-ui/core/Typography";
import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import PersonDetails from "./personDetails";
import { useRoutes } from "hookrouter";
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
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

function PeopleList() {
  //DISPATCHING ACTION FOR GETTING PEOPLE DETAILS FROM THE ID
  const dispatch = useDispatch();
  const people = useSelector((state) => state.peopleReducer.people);
  const [selectedIndex] = React.useState(1);
  const history = useHistory();
  const handleClick = () => history.push('/persondetails');
  const handleClickRoute = () => history.push('/')

  useEffect(() => {
    dispatch(fetchPeople());
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MainItems text={"People"} />
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/" onClick={handleClickRoute}>
          Home
        </Link>
        <Typography color="textPrimary">People List</Typography>
      </Breadcrumbs>
      {people.length > 0 &&
        people.map((p, i) => {
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
                onClick={handleClick}
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

export default connect()(PeopleList);
