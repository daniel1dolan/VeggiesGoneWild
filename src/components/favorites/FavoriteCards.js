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
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import { maxHeight } from "@material-ui/system";

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
      <Grid container spacing={3}>
        {props.favoriteRecipes.map((recipe, index) => {
          return (
            <Grid item xs={3} key={index}>
              <Card className={classes.root}>
                <CardHeader
                  // avatar={
                  //   <Avatar aria-label="recipe" className={classes.avatar}>
                  //     R
                  //   </Avatar>
                  // }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={recipe.title}
                  subheader={"Time: " + recipe.readyInMinutes}
                />
                <CardMedia
                  className={classes.media}
                  image={recipe.image}
                  title={recipe.title}
                />
                <CardContent>
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
                      props.removeRecipeFromFavorites(recipe.id);
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
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <ExpandMoreIcon />
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
