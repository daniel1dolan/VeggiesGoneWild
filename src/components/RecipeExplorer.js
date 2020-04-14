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
import SearchBar from "./recipesearch/SearchBar";
import RecipeCards from "./recipesearch/RecipeCards";
import dummyData from "../dummyData/dummyData.json";

class RecipeExplorer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: "",
      cuisineField: "",
      typeField: "",
      recipesWanted: [],
    };
  }

  //Inital recipe load
  componentWillMount = (params) => {
    // let url =
    //   "https://api.spoonacular.com/recipes/complexSearch?apiKey=8c68b07724d1450abd164de9a4455132&diet=vegan&number=30&addRecipeNutrition=true&fillIngredients=true&sort=popularity";
    // fetch(url)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     let filteredData = data.results.map((recipe) => {
    //       return {
    //         title: recipe.title,
    //         readyInMinutes: recipe.readyInMinutes,
    //         image: recipe.image,
    //         summary: recipe.summary,
    //         nutrition: recipe.nutrition,
    //         instructions: recipe.analyzedInstructions,
    //         ingredients: recipe.missedIngredients,
    //       };
    //     });
    //     this.setState({
    //       recipesWanted: filteredData,
    //     });
    //   });
    //When spoonacular request run out: use dummy data.
    let filteredData = dummyData.results.map((recipe) => {
      return {
        title: recipe.title,
        readyInMinutes: recipe.readyInMinutes,
        image: recipe.image,
        summary: recipe.summary,
        nutrition: recipe.nutrition,
        instructions: recipe.analyzedInstructions,
        ingredients: recipe.missedIngredients,
        id: recipe.id,
      };
    });
    this.setState({
      recipesWanted: filteredData,
    });
  };

  //Handling of input field data storage
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
  //Search submit handler
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
    console.log(dataObj);
    let url =
      "https://api.spoonacular.com/recipes/complexSearch?apiKey=8c68b07724d1450abd164de9a4455132&diet=vegan&number=30&addRecipeNutrition=true&fillIngredients=true";
    if (dataObj.searchField) {
      url += `&query=${dataObj.searchField}`;
    }
    if (dataObj.cuisineField) {
      url += `&cuisine=${dataObj.cuisineField}`;
    }
    if (dataObj.typeField) {
      url += `&type=${dataObj.typeField}`;
    }
    console.log(url);
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let filteredData = data.results.map((recipe) => {
          return {
            title: recipe.title,
            readyInMinutes: recipe.readyInMinutes,
            image: recipe.image,
            summary: recipe.summary,
            nutrition: recipe.nutrition,
            instructions: recipe.analyzedInstructions,
            ingredients: recipe.missedIngredients,
            id: recipe.id,
          };
        });
        console.log(filteredData);
        this.setState({
          recipesWanted: filteredData,
        });
      });
  };

  //Adding recipe to favorite button handling
  addFavoriteRecipeHandler = (index) => {
    console.log(index);
    this.props.favoriteRecipesIDs.includes(this.state.recipesWanted[index].id)
      ? this.props.removeRecipeFromFavorites(this.state.recipesWanted[index].id)
      : this.props.addRecipeToFavorites(this.state.recipesWanted[index]);
  };

  render() {
    return (
      <>
        <SearchBar
          searchChange={this.handleSearchChange}
          cuisineChange={this.handleCuisineChange}
          typeChange={this.handleTypeChange}
          parentState={this.state}
          submitHandler={this.onSubmitHandler}
        />
        <RecipeCards
          parentState={this.state}
          addFave={this.addFavoriteRecipeHandler}
          favoriteRecipesIDs={this.props.favoriteRecipesIDs}
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
    testCase2: (dataObj) => dispatch(testCase2(dataObj)),
    removeRecipeFromFavorites: (id) => dispatch(removeRecipeFromFavorites(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeExplorer);
