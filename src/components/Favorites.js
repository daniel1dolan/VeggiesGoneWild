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
import FavoriteCards from "./favorites/FavoriteCards";

class Favorites extends Component {
  constructor(props) {
    super(props);
  }
  removeFavoriteRecipeHandler = (id) => {
    console.log(id);
    this.props.removeRecipeFromFavorites(id);
  };
  render() {
    return (
      <>
        <FavoriteCards
          favoriteRecipes={this.props.favoriteRecipes}
          favoriteRecipesIDs={this.props.favoriteRecipesIDs}
          removeRecipeFromFavorites={this.removeFavoriteRecipeHandler}
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
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addRecipeToFavorites: (dataObj) => dispatch(addRecipeToFavorites(dataObj)),
    testcase2: (dataObj) => dispatch(testCase2(dataObj)),
    removeRecipeFromFavorites: (id) => dispatch(removeRecipeFromFavorites(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
