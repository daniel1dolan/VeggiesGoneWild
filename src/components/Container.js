import React, { Component } from "react";
import { connect } from "react-redux";
import { TESTCASE1, TESTCASE2, TESTCASE3 } from "../actions/actionTypes";
import { testCase1 } from "../actions/actionTemplate";
import { testCase2 } from "../actions/actionTemplate";
import { testCase3 } from "../actions/actionTemplate";

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
        <button onClick={() => this.props.testcase1()}>Update Count</button>
        <br />
        <button
          onClick={data => {
            this.props.testcase2(data);
          }}
        >
          Add Item
        </button>
        <br />
        <button
          onClick={id => {
            this.props.testcase3(id);
          }}
        >
          Delete Item
        </button>
      </>
    );
  }
}

let mapStateToProps = state => {
  return {
    tempInt: state.template.state1,
    tempArr: state.template.state2
  };
};

let mapDispatchToProps = dispatch => {
  return {
    testcase1: () => dispatch(testCase1()),
    testcase2: dataObj => dispatch(testCase2(dataObj)),
    testcase3: id => dispatch(testCase3(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
