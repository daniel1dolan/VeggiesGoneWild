import React from "react";
import ReactDOM from "react-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import themes from "./util/theme";

//Redux
import { createStore } from "redux";
import { Provider } from "react-redux";

//Router
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Components
import BaseLayout from "./components/layout/BaseLayout";
import App from "./App";
import Container from "./components/Container";
import RecipeExplorer from "./components/RecipeExplorer";
import Favorites from "./components/Favorites";

//Root Reducer
import rootReducer from "./reducers/rootReducer";

//MUI
const theme = createMuiTheme(themes);

//Local storage
let saveToLocalStorage = (state) => {
  try {
    const serializeState = JSON.stringify(state);
    localStorage.setItem("state", serializeState);
  } catch (e) {
    console.log(e);
  }
};

let loadFromLocalStorage = () => {
  try {
    const serializeState = localStorage.getItem("state");
    if (serializeState === null) {
      return undefined;
    } else {
      return JSON.parse(serializeState);
    }
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

//Loads data from storage
const persistedState = loadFromLocalStorage();

//Redux Store
let store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//Connects local storage function to redux store.
store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/recipeexplorer" component={RecipeExplorer} />
            <Route exact path="/recipeexplorer:id" component={Container} />
            <Route exact path="/favorites" component={Favorites} />
            <Route exact path="/grocerylist" component={Container} />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
