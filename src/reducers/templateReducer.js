import {
  ADDRECIPETOFAVORITES,
  TESTCASE2,
  REMOVERECIPEFROMFAVORITES,
  INDIVIDUALRECIPEDATA,
  ADDRECIPETOLIST,
  REMOVERECIPEFROMLIST,
  HOMEPAGEBROWSE,
} from "../actions/actionTypes";

let templateReducer = (state, action) => {
  let initState = {
    state1: 0,
    favoriteRecipes: [],
    favoriteRecipesIDs: [],
    individualRecipe: {},
    groceryList: [],
    groceryListIDs: [],
    query: "",
  };
  //Initialize state
  if (state === undefined) {
    state = initState;
  }

  //Action type switch.
  switch (action.type) {
    case ADDRECIPETOFAVORITES:
      //increasing value
      console.log(action.data);
      return {
        ...state,
        favoriteRecipes: state.favoriteRecipes.concat(action.data),
        favoriteRecipesIDs: state.favoriteRecipesIDs.concat(action.data.id),
      };

    case TESTCASE2:
      //adding to array
      return {
        ...state,
        state2: state.state2.concat(action.data),
      };
    case REMOVERECIPEFROMFAVORITES:
      //deleting from array
      let filteredArray = state.favoriteRecipes.filter((item) => {
        return item.id != action.id;
      });
      let updateIDs = state.favoriteRecipesIDs.filter((id) => {
        return id != action.id;
      });
      return {
        ...state,
        favoriteRecipes: filteredArray,
        favoriteRecipesIDs: updateIDs,
      };
    case INDIVIDUALRECIPEDATA:
      //change individual recipe data
      console.log(action.data);
      let newIndividualRecipe = state.individualRecipe;
      newIndividualRecipe = action.data;
      return {
        ...state,
        individualRecipe: newIndividualRecipe,
      };
    case ADDRECIPETOLIST:
      //increasing value
      console.log(action.data);
      return {
        ...state,
        groceryList: state.groceryList.concat(action.data),
        groceryListIDs: state.groceryListIDs.concat(action.data.id),
      };
    case REMOVERECIPEFROMLIST:
      //deleting from array
      let filteredArray2 = state.groceryList.filter((item) => {
        return item.id != action.id;
      });
      let updateIDs2 = state.groceryListIDs.filter((id) => {
        return id != action.id;
      });
      return {
        ...state,
        groceryList: filteredArray2,
        groceryListIDs: updateIDs2,
      };
    case HOMEPAGEBROWSE:
      //adding to array
      return {
        ...state,
        query: action.query,
      };

    default:
      return state;
  }
};

export default templateReducer;
