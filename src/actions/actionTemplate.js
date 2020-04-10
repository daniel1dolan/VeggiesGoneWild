import { TESTCASE1, TESTCASE2, TESTCASE3 } from "./actionTypes";

export const testCase1 = () => {
  return {
    type: TESTCASE1
  };
};

export const testCase2 = dataObj => {
  return {
    type: TESTCASE2,
    data: dataObj
  };
};
export const testCase3 = id => {
  return {
    type: TESTCASE3,
    id: id
  };
};
