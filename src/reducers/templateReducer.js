import { TESTCASE1, TESTCASE2, TESTCASE3 } from "../actions/actionTypes";

let templateReducer = (state, action) => {
  let initState = {
    state1: 0,
    state2: []
  };
  //Initialize state
  if (state === undefined) {
    state = initState;
  }

  //Action type switch.
  switch (action.type) {
    case TESTCASE1:
      //increasing value
      return {
        ...state,
        state1: state.state1 + 1
      };

    case TESTCASE2:
      //adding to array
      return {
        ...state,
        state2: state.state2.concat(action.data)
      };
    case TESTCASE3:
      //deleting from array
      let filteredArray = state.state2.filter(item => {
        return item.id != action.id;
      });
      return {
        ...state,
        state2: filteredArray
      };

    default:
      return state;
  }
};

export default templateReducer;
