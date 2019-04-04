import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

import Header from "./Header";
import Landing from "./Landing";

const Dashboard = () => <h2> Dashboard </h2>;
const SurveryNew = () => <h2> SurveryNew </h2>;

class App extends React.Component {
  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route exact path="/surveys/new" component={SurveryNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchUser }
)(App);
