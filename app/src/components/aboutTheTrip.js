import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import grey from "@material-ui/core/colors/grey";
import { compose } from "recompose";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import ImageCarousel from "../components/imageCarousel";

const styles = theme => ({
  root: {
    backgroundColor: "#DE6985",
    height: "100%",
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingBottom: "5%",
    paddingTop: "15%",
    [theme.breakpoints.up("md")]: {
      paddingTop: "5%"
    },
    flexGrow: 1
  },
  gridContainer: {
    alignItems: "center"
  },
  title: {
    color: "white",
    marginBottom: "5%"
  },
  headline: {
    color: "white",
    textAlign: "justify"
  },
  body: {
    color: grey[400]
  },
  card: {
    borderRadius: "30px"
  },
  media: {
    height: 0,
    paddingTop: "70%",
    backgroundSize: "50%"
  },
  cardContainer: {
    marginLeft: "5%",
    marginRight: "5%",
    marginBottom: "5%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  cardContainerMdUp: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: "10%",
    paddingLeft: "5%"
  },
  dates: {
    paddingLeft: 20,
    [theme.breakpoints.up("sm")]: {
      paddingBottom: 20
    },
    [theme.breakpoints.up("md")]: {
      padding: 0
    }
  },
  imageCarouselMdDown: {
    marginBottom: "10%"
  }
});

class AboutTheTrip extends React.Component {
  render() {
    const { classes, width } = this.props;

    if (isWidthUp("sm", width)) {
      return (
        <div className={classes.root}>
          <Grid container className={classes.gridContainer}>
            <Grid item xs={12} className={classes.titleContainer}>
              <Typography
                className={classes.title}
                variant="display1"
                gutterBottom
                component="h1"
              >
                Heading 1
              </Typography>
            </Grid>

            <Grid container item md={6} className={classes.cardContainerMdUp}>
              <Grid item>
                <Typography
                  className={classes.headline}
                  variant="subheading"
                  gutterBottom
                  component="h2"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  quis neque congue, euismod est sit amet, aliquam ligula.
                  Vivamus posuere molestie quam. Donec vitae rhoncus est. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. In quis
                  neque congue, euismod est sit amet, aliquam ligula. Vivamus
                  posuere molestie quam. Donec vitae rhoncus est.
                </Typography>
              </Grid>
            </Grid>

            <Grid item md={6}>
              <ImageCarousel />
            </Grid>
          </Grid>
        </div>
      );
    }

    return (
      <div className={classes.root}>
        <Grid container className={classes.gridContainer}>
          <Grid item xs={12} className={classes.titleContainer}>
            <Typography
              className={classes.title}
              variant="display1"
              gutterBottom
              component="h1"
            >
              Heading 1
            </Typography>
          </Grid>

          <Grid container item md={6} className={classes.cardContainerMdUp}>
            <Typography
              className={classes.headline}
              variant="title"
              gutterBottom
              component="h2"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis
              neque congue, euismod est sit amet, aliquam ligula. Vivamus
              posuere molestie quam. Donec vitae rhoncus est. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. In quis neque congue,
              euismod est sit amet, aliquam ligula. Vivamus posuere molestie
              quam. Donec vitae rhoncus est.
            </Typography>
          </Grid>

          <Grid item md={6}>
            <ImageCarousel />
          </Grid>
        </Grid>
      </div>
    );
  }
}

AboutTheTrip.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired
};

export default compose(
  withWidth(),
  withStyles(styles)
)(AboutTheTrip);
