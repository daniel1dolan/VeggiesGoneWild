import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 900,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  marginLeft: {
    paddingLeft: 0,
  },
}));

export default function Info(props) {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <div className={classes.root}>
      <Typography variant="h2" gutterBottom>
        Grocery List
      </Typography>
      {props.groceryList.length < 1 && (
        <Typography variant="body1" gutterBottom>
          Add an item to your list using the list icon below each recipe.
        </Typography>
      )}
      <div>
        {props.titles.map((recipe, index) => {
          return (
            <span style={{ display: "inline" }}>
              {recipe.title}
              <IconButton
                onClick={() => {
                  props.removeRecipeFromList(recipe.id);
                }}
              >
                <ClearIcon />
              </IconButton>
            </span>
          );
        })}
      </div>
      <Grid container spacing={3}>
        {props.groceryList.map((aisle, index) => {
          return (
            <Grid item>
              <Typography variant="h6" className={classes.title}>
                {aisle.aisle}
              </Typography>
              <div className={classes.demo}>
                <List dense={dense}>
                  {aisle.aisleIngredients.map((ingredient, index) => {
                    return (
                      <ListItem key={index}>
                        {/* <ListItemIcon>

                        </ListItemIcon> */}
                        <Checkbox
                          inputProps={{ "aria-label": "uncontrolled-checkbox" }}
                        />
                        <ListItemText
                          primary={ingredient}
                          secondary={secondary ? "Secondary text" : null}
                        />
                      </ListItem>
                    );
                  })}
                </List>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
