import React, { Component } from "react";
import { connect } from "react-redux";
import { TESTCASE1, TESTCASE2, TESTCASE3 } from "../actions/actionTypes";
import { testCase1 } from "../actions/actionTemplate";
import { testCase2 } from "../actions/actionTemplate";
import { testCase3 } from "../actions/actionTemplate";
import SearchBar from "./recipesearch/SearchBar";
import RecipeCards from "./recipesearch/RecipeCards";

class RecipeExplorer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: "",
      cuisineField: "",
      typeField: "",
      recipesWanted: [1],
    };
  }
  handleSearchChange = (e) => {
    this.setState({
      searchField: e.target.value,
    });
  };
  handleCuisineChange = (e) => {
    this.setState({
      cuisineField: e.target.value,
    });
  };
  handleTypeChange = (e) => {
    this.setState({
      typeField: e.target.value,
    });
  };
  onSubmitHandler = (e) => {
    e.preventDefault();
    this.onRecipeSearch({
      searchField: this.state.searchField,
      cuisineField: this.state.cuisineField,
      typeField: this.state.typeField,
    });
    this.setState({
      searchField: "",
      cuisineField: "",
      typeField: "",
    });
  };
  //onRecipeSearch checks which input fields contain data then makes the corresponding API call
  onRecipeSearch = (dataObj) => {
    let url =
      "https://api.spoonacular.com/recipes/complexSearch?apiKey=8c68b07724d1450abd164de9a4455132&diet=vegan&number=30&addRecipeNutrition=true&fillIngredients=true";
    if (dataObj.searchField) {
      url += `&query=${dataObj.searchField}`;
    }
    if (dataObj.cuisineField) {
      url += `&cuisine=${dataObj.cuisineField}`;
    }
    if (dataObj.typeField) {
      url += `&cuisine=${dataObj.typeField}`;
    }
  };
  render() {
    return (
      <>
        <SearchBar
          searchChange={this.handleSearchChange}
          cuisineChange={this.handleCuisineChange}
          typeChange={this.handleTypeChange}
          parentState={this.state}
        />
        {/* <RecipeCards /> */}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    tempInt: state.template.state1,
    tempArr: state.template.state2,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    testcase1: () => dispatch(testCase1()),
    testcase2: (dataObj) => dispatch(testCase2(dataObj)),
    testcase3: (id) => dispatch(testCase3(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeExplorer);
