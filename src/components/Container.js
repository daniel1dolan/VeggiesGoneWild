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

class Container extends Component {
  render() {
    return (
      <>
        Count: {this.props.tempInt}
        <br />
        Array:
        {this.props.tempArr.map((item, index) => {
          return <li>{item}</li>;
        })}
        <br />
        <button onClick={() => this.props.addRecipeToFavorites()}>
          Update Count
        </button>
        <br />
        <button
          onClick={(data) => {
            this.props.testcase2(data);
          }}
        >
          Add Item
        </button>
        <br />
        <button
          onClick={(id) => {
            this.props.testcase3(id);
          }}
        >
          Delete Item
        </button>
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
    addRecipeToFavorites: () => dispatch(addRecipeToFavorites()),
    testcase2: (dataObj) => dispatch(testCase2(dataObj)),
    removeRecipeFromFavorites: (id) => dispatch(removeRecipeFromFavorites(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
