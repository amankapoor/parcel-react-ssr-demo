import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AboutTheTrip from "./components/aboutTheTrip";
import Itinerary from "./components/itinerary";

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: "hidden"
  }
});

const Main = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <AboutTheTrip />
        </Grid>

        <Grid item xs={12}>
          <br />
        </Grid>

        <Grid item xs={12}>
          <Itinerary />
        </Grid>
      </Grid>
    </div>
  );
};

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Main);
