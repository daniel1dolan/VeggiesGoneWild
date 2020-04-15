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

class IndividualRecipe extends Component {
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
        <Info recipeInfo={this.props.individualRecipe} />
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
