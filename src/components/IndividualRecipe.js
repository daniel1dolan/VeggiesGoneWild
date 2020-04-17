import React, { Component } from "react";
import { connect } from "react-redux";
import {
  ADDRECIPETOFAVORITES,
  TESTCASE2,
  REMOVERECIPEFROMFAVORITES,
} from "../actions/actionTypes";
import { addRecipeToFavorites } from "../actions/actionTemplate";
import { testCase2 } from "../actions/actionTemplate";
import { removeRecipeFromFavorites } from "../actions/actionTemplate";
import { addRecipeToList } from "../actions/actionTemplate";
import { removeRecipeFromList } from "../actions/actionTemplate";
import Info from "./individualrecipe/Info";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ListIcon from "@material-ui/icons/List";

class IndividualRecipe extends Component {
  constructor(props) {
    super(props);
  }
  addIngredientsToListHandler = () => {
    this.props.groceryListIDs.includes(this.props.individualRecipe.id)
      ? this.props.removeRecipeFromList(this.props.individualRecipe.id)
      : this.props.addRecipeToList(this.props.individualRecipe);
  };
  addFavoriteRecipeHandler = () => {
    this.props.favoriteRecipesIDs.includes(this.props.individualRecipe.id)
      ? this.props.removeRecipeFromFavorites(this.props.individualRecipe.id)
      : this.props.addRecipeToFavorites(this.props.individualRecipe);
  };
  render() {
    return (
      <>
        <div
          style={{
            backgroundImage: `url(${this.props.individualRecipe.image})`,
            position: "relative",

            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            minHeight: 300,
          }}
        ></div>
        <div>
          <IconButton
            aria-label="add to favorites"
            onClick={() => {
              this.addFavoriteRecipeHandler();
            }}
          >
            <FavoriteIcon
              style={
                this.props.favoriteRecipesIDs.includes(
                  this.props.individualRecipe.id
                )
                  ? { color: "red" }
                  : { color: "grey" }
              }
            />
          </IconButton>
          <IconButton
            aria-label="add-to-grocery-list"
            onClick={() => {
              this.addIngredientsToListHandler();
            }}
          >
            <ListIcon
              color={
                this.props.groceryListIDs.includes(
                  this.props.individualRecipe.id
                )
                  ? "primary"
                  : "disabled"
              }
            />
          </IconButton>
        </div>
        <Info
          recipeInfo={this.props.individualRecipe}
          favoriteRecipesIDs={this.props.favoriteRecipesIDs}
          addFave={this.addFavoriteRecipeHandler}
          addIngredientsToListHandler={this.addIngredientsToListHandler}
          groceryListIDs={this.props.groceryListIDs}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    favoriteRecipes: state.reduxData.favoriteRecipes,
    tempArr: state.reduxData.state2,
    favoriteRecipesIDs: state.reduxData.favoriteRecipesIDs,
    individualRecipe: state.reduxData.individualRecipe,
    groceryList: state.reduxData.groceryList,
    groceryListIDs: state.reduxData.groceryListIDs,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addRecipeToFavorites: (dataObj) => dispatch(addRecipeToFavorites(dataObj)),
    testCase2: (dataObj) => dispatch(testCase2(dataObj)),
    removeRecipeFromFavorites: (id) => dispatch(removeRecipeFromFavorites(id)),
    addRecipeToList: (dataObj) => dispatch(addRecipeToList(dataObj)),
    removeRecipeFromList: (id) => dispatch(removeRecipeFromList(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IndividualRecipe);
