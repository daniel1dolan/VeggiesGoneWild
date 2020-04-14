import {
  ADDRECIPETOFAVORITES,
  TESTCASE2,
  REMOVERECIPEFROMFAVORITES,
} from "./actionTypes";

export const addRecipeToFavorites = (dataObj) => {
  return {
    type: ADDRECIPETOFAVORITES,
    data: dataObj,
  };
};

export const testCase2 = (dataObj) => {
  return {
    type: TESTCASE2,
    data: dataObj,
  };
};
export const removeRecipeFromFavorites = (id) => {
  return {
    type: REMOVERECIPEFROMFAVORITES,
    id: id,
  };
};
