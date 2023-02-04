import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import AddPost from "./components/AddPost";
import ErrorPopup from "./components/ErrorPopup";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { fetchCategories, initUserState } from "./store/actions";

const App = (props) => {

  useEffect(() => {
    props.initUserState();
    props.fetchCategories();
  });

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/author/:authorId">
          <Posts type="author" />
        </Route>
        <Route exact path="/category/:categoryId">
          <Posts type="category" />
        </Route>
        <Route exact path="/signin">
          <Signin />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/add">
          <AddPost />
        </Route>
        <Route exact path="/" component={Posts} />
      </Switch>
      <ErrorPopup />
    </div>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  initUserState: () => dispatch(initUserState()),
  fetchCategories: () => dispatch(fetchCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
