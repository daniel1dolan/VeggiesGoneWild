import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WorkIcon from "@material-ui/icons/Work";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    borderTop: `1px solid ${theme.palette.divider}`,
    paddingBottom: "60px",
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    paddingBottom: "10px",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <hr />
      <div className="sticky-bottom">
        <Grid container justify="center" alignItems="center">
          <Grid item xs={1}>
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </Grid>
          <Grid item xs={1}>
            <IconButton>
              <LinkedInIcon />
            </IconButton>
          </Grid>
          <Grid item xs={1}>
            <IconButton>
              <WorkIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={2}>
            <Typography variant="subtitle">By: Daniel Dolan</Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Footer;
