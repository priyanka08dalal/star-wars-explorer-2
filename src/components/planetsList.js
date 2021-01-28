// import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import MainItems from './MainItems'
import { connect, useDispatch, useSelector } from 'react-redux'
import { fetchPlanet } from '../actions/planetAction';
import { useEffect } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ImageIcon from '@material-ui/icons/Image';
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    width: '100%',
    maxWidth: 360,
    direction: 'row',
    padding: 0,
    display: 'inline-block',
    backgroundColor: theme.palette.background.paper,
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  
}));

function PlanetsList( ) {

  console.log("planetsList")
  const dispatch = useDispatch();
  const planet = useSelector(state => state.planetsReducer.planet)
  console.log("Planet---->",planet)
  useEffect(() => {
    dispatch(fetchPlanet());
  },[] )

  const classes = useStyles();
  // const preventDefault = (event) => event.preventDefault();

  return (
    <div className={classes.root}>
      <MainItems text={"Planets"} />
      {planet&&planet.length > 0 && planet.map ((p,i) => {
        return(<List className={classes.root} key = {i}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            {/* <ListItemText primary={p.name}/> */}
            
          
          <Typography >
      
          <Link to='/planetsdetails'>
         {p.name}
      </Link>
      </Typography>
      </ListItem>
    
        </List>)
      })}
    </div>
  );
}


export default connect(

) (PlanetsList);
