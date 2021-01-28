import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import MainItems from "./MainItems";
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchPeople } from "../actions/peopleActions";
import { useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ImageIcon from "@material-ui/icons/Image";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

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

  useEffect(() => {
    dispatch(fetchPeople());
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MainItems text={"People"} />
      {people.length > 0 &&
        people.map((p, i) => {
          return (
            <List className={classes.root} key={i}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>

                <Typography>
                  <Link to="/persondetails">{p.name}</Link>
                </Typography>
              </ListItem>
            </List>
          );
        })}
    </div>
  );
}

export default connect()(PeopleList);
