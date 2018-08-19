import React from "react";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    display: "block",
    marginTop: "20vh",
    padding: "10%"
  }
});

class NotFound extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="display1" gutterBottom>
          Page Not Found
        </Typography>
        <Typography variant="subheading">
          <Link to="/">Click Here To Go To Homepage</Link>
        </Typography>
      </div>
    );
  }
}

NotFound.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NotFound);
