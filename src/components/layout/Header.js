import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    width: "100px",
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

const Header = (props) => {
  const classes = useStyles();
  return (
    <>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        <Typography
          component="img"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
          src={require("../../util/imgs/vgw-logo.png")}
        ></Typography>
        <Link
          color="inherit"
          noWrap
          variant="body2"
          href="/"
          className={classes.toolbarLink}
        >
          Home
        </Link>
        <Link
          color="inherit"
          noWrap
          variant="body2"
          href="/container"
          className={classes.toolbarLink}
        >
          Container
        </Link>
        <Link
          color="inherit"
          noWrap
          variant="body2"
          href="/"
          className={classes.toolbarLink}
        >
          Home
        </Link>
        <Link
          color="inherit"
          noWrap
          variant="body2"
          href="/"
          className={classes.toolbarLink}
        >
          Home
        </Link>
      </Toolbar>
    </>
  );
};

export default Header;
