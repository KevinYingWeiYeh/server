import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Landing = () => <h2> Landing </h2>;
const Dashboard = () => <h2> Dashboard </h2>;
const SurveryNew = () => <h2> SurveryNew </h2>;
const Header = () => <h2> Header </h2>;

const App = () => {
  return (
    <div>
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
