import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import BGImage from "../../assets/ItinerarySection/background.jpg";

const styles = theme => ({
  root: {
    backgroundColor: "#ECB1A1",
    backgroundImage: `url(${BGImage})`,
    backgroundSize: "auto",
    backgroundPosition: "20% 30%",
    backgroundRepeat: "no-repeat",
    paddingTop: "15%",
    paddingBottom: "10%",
    [theme.breakpoints.up("md")]: {
      paddingBottom: "5%",
      paddingTop: "5%"
    },
    flexGrow: 1,
    [theme.breakpoints.down("md")]: {
      ackgroundImage: `url(${BGImage})`,
      backgroundSize: "auto",
      backgroundPosition: "27% 60%",
      backgroundRepeat: "no-repeat"
    }
  },
  title: {
    color: "white",
    marginBottom: "5%"
  },
  verticalTimelineElement: {
    "& div div": {
      borderRadius: "25px"
    }
  },
  [theme.breakpoints.down("md")]: {
    verticalTimelineElement: {
      "& div div": {
        borderRadius: "15px"
      }
    }
  }
});

class Itinerary extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              className={classes.title}
              variant="display1"
              gutterBottom
              component="h1"
            >
              Heading 2
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(160, 231, 212)", color: "#fff" }}
                className={classes.verticalTimelineElement}
              >
                <Typography
                  variant="subheading"
                  className="vertical-timeline-element-title"
                  gutterBottom
                >
                  Day 1
                </Typography>

                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  quis neque congue, euismod est sit amet, aliquam ligula.
                  Vivamus posuere molestie quam. Donec vitae rhoncus est.
                </Typography>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(160, 231, 212)", color: "#fff" }}
                className={classes.verticalTimelineElement}
              >
                <Typography
                  variant="subheading"
                  className="vertical-timeline-element-title"
                  gutterBottom
                >
                  Day 2
                </Typography>

                <Typography>
                  Part 1 - Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. In quis neque congue, euismod est sit amet, aliquam
                  ligula. Vivamus posuere molestie quam. Donec vitae rhoncus
                  est.
                </Typography>
                <Typography>
                  Part 2 - Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. In quis neque congue, euismod est sit amet, aliquam
                  ligula. Vivamus posuere molestie quam. Donec vitae rhoncus
                  est.
                </Typography>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(160, 231, 212)", color: "#fff" }}
                className={classes.verticalTimelineElement}
              >
                <Typography
                  variant="subheading"
                  className="vertical-timeline-element-title"
                  gutterBottom
                >
                  Day 3
                </Typography>

                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  quis neque congue, euismod est sit amet, aliquam ligula.
                  Vivamus posuere molestie quam. Donec vitae rhoncus est.
                </Typography>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(160, 231, 212)", color: "#fff" }}
                className={classes.verticalTimelineElement}
              >
                <Typography
                  variant="subheading"
                  className="vertical-timeline-element-title"
                  gutterBottom
                >
                  Day 4
                </Typography>

                <Typography>
                  Part 1 - Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. In quis neque congue, euismod est sit amet, aliquam
                  ligula. Vivamus posuere molestie quam. Donec vitae rhoncus
                  est.
                </Typography>
                <Typography>
                  Part 2 - Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. In quis neque congue, euismod est sit amet, aliquam
                  ligula. Vivamus posuere molestie quam. Donec vitae rhoncus
                  est.
                </Typography>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Itinerary.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Itinerary);
