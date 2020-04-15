import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import parse from "html-react-parser";

const useStyles = makeStyles({
  root: {
    margin: 20,
    width: "100%",
    maxWidth: 500,
  },
});

export default function Info(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h2" gutterBottom>
        {props.recipeInfo.title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {parse(props.recipeInfo.summary)}
      </Typography>
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
          >
            {item.originalString}
          </Typography>
        );
      })}
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
      <Typography variant="overline" display="block" gutterBottom>
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
            >
              {item.title}: {item.amount}
              {item.unit}
            </Typography>
          );
        }
      })}
    </div>
  );
}
