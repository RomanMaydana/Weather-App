import React from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

import LocationListContainer from "./containers/LocationListContainer";

import ForecastExtendedContainer from "./containers/ForecastExtendedContainer";
import clsx from "clsx";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      textAling: "center",
    },
  },
  details: {
    background: "gray",
    height: "85vh",
    overflow: "auto",
    padding: "0 20px",
  },
}));

const cities = [
  "Buenos Aires,ar",
  "Washington,us",
  "Bogota,col",
  "Ciudad de Mexico,mx",
  "Lima,pe",
];

const App = (props) => {
  const [city, setCityClick] = React.useState(null);

  const classes = useStyles();

  return (
    <Grid container className={classes.root} justify="space-between">
      <Grid container>
        <AppBar position="sticky">
          <Toolbar>
            <Typography color="inherit">Weather App</Typography>
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid item xs={12} md={6}>
        <LocationListContainer cities={cities} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper elevation={4}>
          <div className={clsx(classes.details)}>
            <ForecastExtendedContainer />
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default App;
