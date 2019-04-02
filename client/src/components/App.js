import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./Header";

const Landing = () => <h2> Landing </h2>;
const Dashboard = () => <h2> Dashboard </h2>;
const SurveryNew = () => <h2> SurveryNew </h2>;

const App = () => {
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
};

export default App;
