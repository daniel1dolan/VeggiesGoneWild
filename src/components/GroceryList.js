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
import { homePageBrowse } from "../actions/actionTemplate";
import GroceInfo from "./grocerylist/GroceInfo";

class GroceryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedIngredients: [],
    };
  }
  componentWillMount = (params) => {
    let groceryList = this.props.groceryList;
    let sortIngredients = [];
    Loop1: groceryList.forEach((item) => {
      console.log("Item start");
      item.ingredients.forEach((ingredient) => {
        if (sortIngredients.length < 1) {
          console.log("first if");
          sortIngredients.push({
            aisle: ingredient.aisle,
            aisleIngredients: [ingredient.originalString],
          });
        } else {
          Loop2: for (let index = 0; index <= sortIngredients.length; index++) {
            console.log(sortIngredients[index].aisle);
            console.log(ingredient.aisle, ingredient.originalString);
            if (sortIngredients[index].aisle === ingredient.aisle) {
              console.log("existing aisle found");
              sortIngredients[index].aisleIngredients.push(
                ingredient.originalString
              );
              return;
            } else if (index + 1 === sortIngredients.length) {
              console.log("new aisle added");
              sortIngredients.push({
                aisle: ingredient.aisle,
                aisleIngredients: [ingredient.originalString],
              });
              return;
            }
          }
        }
      });
    });
    this.setState(
      {
        sortedIngredients: sortIngredients,
      },
      () => {
        console.log(this.state.sortedIngredients);
      }
    );
  };
  removeRecipeFromListHandler = (id) => {
    this.props.removeRecipeFromList(id);
    this.setState(
      {
        sortedIngredients: this.state.sortedIngredients,
      },
      () => {
        let groceryList = this.props.groceryList;
        let sortIngredients = [];
        Loop1: groceryList.forEach((item) => {
          console.log("Item start");
          item.ingredients.forEach((ingredient) => {
            if (sortIngredients.length < 1) {
              console.log("first if");
              sortIngredients.push({
                aisle: ingredient.aisle,
                aisleIngredients: [ingredient.originalString],
              });
            } else {
              Loop2: for (
                let index = 0;
                index <= sortIngredients.length;
                index++
              ) {
                console.log(sortIngredients[index].aisle);
                console.log(ingredient.aisle, ingredient.name);
                if (sortIngredients[index].aisle === ingredient.aisle) {
                  console.log("existing aisle found");
                  sortIngredients[index].aisleIngredients.push(
                    ingredient.originalString
                  );
                  return;
                } else if (index + 1 === sortIngredients.length) {
                  console.log("new aisle added");
                  sortIngredients.push({
                    aisle: ingredient.aisle,
                    aisleIngredients: [ingredient.originalString],
                  });
                  return;
                }
              }
            }
          });
        });
        this.setState(
          {
            sortedIngredients: sortIngredients,
          },
          () => {
            console.log(this.state.sortedIngredients);
          }
        );
      }
    );
  };
  render() {
    return (
      <>
        <GroceInfo
          groceryList={this.state.sortedIngredients}
          titles={this.props.groceryList}
          removeRecipeFromList={this.removeRecipeFromListHandler}
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
    query: state.reduxData.query,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addRecipeToFavorites: (dataObj) => dispatch(addRecipeToFavorites(dataObj)),
    testcase2: (dataObj) => dispatch(testCase2(dataObj)),
    removeRecipeFromFavorites: (id) => dispatch(removeRecipeFromFavorites(id)),
    addRecipeToList: (dataObj) => dispatch(addRecipeToList(dataObj)),
    removeRecipeFromList: (id) => dispatch(removeRecipeFromList(id)),
    homePageBrowse: (query) => dispatch(homePageBrowse(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroceryList);
