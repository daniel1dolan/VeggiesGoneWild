import React from "react";
import QuickLinks from "./components/home/QuickLinks";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { homePageBrowse } from "./actions/actionTemplate";
import { Redirect } from "react-router-dom";

function App(props) {
  return (
    <>
      {props.query.length > 0 && <Redirect to="/recipeexplorer" />}
      <Typography variant="body1">
        Hello and welcome to Veggies Gone Wild! Many people want to start eating
        Vegan for various reasons, but don't know where to begin! We want to
        bring delicious, easy vegan recipes to everyone!
      </Typography>
      <br />
      <br />
      <Typography variant="h5">Start Browsing Recipes!</Typography>
      <QuickLinks homePageBrowse={props.homePageBrowse} />
      <br />
      <br />
      <Typography variant="h5">Vegan Q and A</Typography>
      <br />
      <Typography variant="button">
        How do I make a cream base Vegan?
      </Typography>
      <ul></ul>
      <Typography component="li" variant="subtitle">
        We like to make our cream bases out of Cashews! You can start by boiling
        cashews in water for 30 minutes to make the cashews nice and soft. Then,
        blend the cashews with nutritional yeast and spices to make a delicious
        cream base!
      </Typography>
    </>
  );
}

let mapStateToProps = (state) => {
  return {
    query: state.reduxData.query,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    homePageBrowse: (query) => dispatch(homePageBrowse(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
