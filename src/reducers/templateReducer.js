import {
  ADDRECIPETOFAVORITES,
  TESTCASE2,
  REMOVERECIPEFROMFAVORITES,
} from "../actions/actionTypes";

let templateReducer = (state, action) => {
  let initState = {
    state1: 0,
    favoriteRecipes: [],
    favoriteRecipesIDs: [],
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

    default:
      return state;
  }
};

export default templateReducer;
