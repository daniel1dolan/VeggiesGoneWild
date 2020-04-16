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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

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
      <Grid container spacing={2}>
        {props.groceryList.map((aisle, index) => {
          return (
            <Grid item xs={12} md={6}>
              <Typography variant="h6" className={classes.title}>
                {aisle.aisle}
              </Typography>
              <div className={classes.demo}>
                <List dense={dense}>
                  {aisle.aisleIngredients.map((ingredient) => {
                    return (
                      <ListItem>
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
