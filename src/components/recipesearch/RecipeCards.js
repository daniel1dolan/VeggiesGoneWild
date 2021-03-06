import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ListIcon from "@material-ui/icons/List";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { Redirect } from "react-router-dom";
import { maxHeight } from "@material-ui/system";
import "./Style.css";

import parse from "html-react-parser";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  container: {
    flexGrow: 1,
  },
  // description: {
  //   maxHeight: 300,
  // },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const handleFave = (e) => console.log(e.target.id);

  return (
    <div className={classes.container}>
      {props.redir === true && <Redirect to="/individualrecipe" />}
      <Grid container spacing={3}>
        {props.parentState.recipesWanted.map((recipe, index) => {
          return (
            <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
              <Card className={classes.root}>
                <CardHeader
                  className="header"
                  onClick={() => props.clickIndividualRecipeHandler(index)}
                  // avatar={
                  //   <Avatar aria-label="recipe" className={classes.avatar}>
                  //     R
                  //   </Avatar>
                  // }
                  title={recipe.title}
                  subheader={"Time: " + recipe.readyInMinutes}
                />
                <CardMedia
                  className={classes.media}
                  image={recipe.image}
                  title={recipe.title}
                />
                <CardContent className="truncate-overflow">
                  <Typography
                    className={classes.description}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {parse(recipe.summary)}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton
                    id={recipe.title}
                    aria-label="add to favorites"
                    onClick={() => {
                      props.addFave(index);
                    }}
                  >
                    <FavoriteIcon
                      style={
                        props.favoriteRecipesIDs.includes(recipe.id)
                          ? { color: "red" }
                          : { color: "grey" }
                      }
                    />
                  </IconButton>
                  <IconButton
                    aria-label="add-to-grocery-list"
                    onClick={() => {
                      props.addIngredientsToListHandler(index);
                    }}
                  >
                    <ListIcon
                      color={
                        props.groceryListIDs.includes(recipe.id)
                          ? "primary"
                          : "disabled"
                      }
                    />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
