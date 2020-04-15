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
import FavoriteCards from "./favorites/FavoriteCards";

class Favorites extends Component {
  constructor(props) {
    super(props);
  }
  removeFavoriteRecipeHandler = (id) => {
    console.log(id);
    this.props.removeRecipeFromFavorites(id);
  };
  //Adding recipe ingredients to grocery list
  addIngredientsToListHandler = (index) => {
    this.props.groceryListIDs.includes(this.props.favoriteRecipes[index].id)
      ? this.props.removeRecipeFromList(this.props.favoriteRecipes[index].id)
      : this.props.addRecipeToList(this.props.favoriteRecipes[index]);
  };
  render() {
    return (
      <>
        <FavoriteCards
          favoriteRecipes={this.props.favoriteRecipes}
          favoriteRecipesIDs={this.props.favoriteRecipesIDs}
          removeRecipeFromFavorites={this.removeFavoriteRecipeHandler}
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
    groceryList: state.reduxData.groceryList,
    groceryListIDs: state.reduxData.groceryListIDs,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addRecipeToFavorites: (dataObj) => dispatch(addRecipeToFavorites(dataObj)),
    testcase2: (dataObj) => dispatch(testCase2(dataObj)),
    removeRecipeFromFavorites: (id) => dispatch(removeRecipeFromFavorites(id)),
    addRecipeToList: (dataObj) => dispatch(addRecipeToList(dataObj)),
    removeRecipeFromList: (id) => dispatch(removeRecipeFromList(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
