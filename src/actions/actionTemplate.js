import {
  ADDRECIPETOFAVORITES,
  TESTCASE2,
  REMOVERECIPEFROMFAVORITES,
  INDIVIDUALRECIPEDATA,
  ADDRECIPETOLIST,
  REMOVERECIPEFROMLIST,
  HOMEPAGEBROWSE,
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

export const individualRecipeData = (dataObj) => {
  return {
    type: INDIVIDUALRECIPEDATA,
    data: dataObj,
  };
};

export const addRecipeToList = (dataObj) => {
  return {
    type: ADDRECIPETOLIST,
    data: dataObj,
  };
};

export const removeRecipeFromList = (id) => {
  return {
    type: REMOVERECIPEFROMLIST,
    id: id,
  };
};
export const homePageBrowse = (query) => {
  return {
    type: HOMEPAGEBROWSE,
    query: query,
  };
};
