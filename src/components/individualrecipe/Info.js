import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import parse from "html-react-parser";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 30,
    width: "100%",
    maxWidth: "90vw",
  },
  ingredientBox: {
    marginTop: 10,
    marginBottom: 10,
    display: "inline-block",
  },
  bodyText: {
    marginRight: 30,
  },
  nutritionBox: {
    marginTop: 10,
    marginBottom: 10,
    border: "3px double #C5E29E",
    display: "inline-block",
  },
}));

export default function Info(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h2" gutterBottom>
        {props.recipeInfo.title}
      </Typography>
      <Typography className={classes.bodyText} variant="body1" gutterBottom>
        {parse(props.recipeInfo.summary)}
      </Typography>
      <div className={classes.ingredientBox}>
        <Typography variant="button" display="block" gutterBottom>
          Ingredients:
        </Typography>
        {props.recipeInfo.ingredients.map((item, index) => {
          return (
            <Typography
              key={index}
              variant="caption"
              display="block"
              gutterBottom
              style={{ margin: "10px" }}
            >
              {item.originalString}
            </Typography>
          );
        })}
      </div>
      <Typography variant="button" display="block" gutterBottom>
        Instructions:
      </Typography>
      {props.recipeInfo.instructions[0].steps.map((item, index) => {
        return (
          <Typography
            key={index}
            variant="caption"
            display="block"
            gutterBottom
          >
            {item.number}. {item.step}
          </Typography>
        );
      })}
      <div className={classes.nutritionBox}>
        <Typography
          variant="overline"
          display="block"
          gutterBottom
          style={{ margin: "5px" }}
        >
          Nutrition:
        </Typography>
        {props.recipeInfo.nutrition.nutrients.map((item, index) => {
          if (index < 9) {
            return (
              <Typography
                key={index}
                variant="caption"
                display="block"
                gutterBottom
                style={{ margin: "10px" }}
              >
                {item.title}: {item.amount}
                {item.unit}
              </Typography>
            );
          }
        })}
      </div>
    </div>
  );
}
