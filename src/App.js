import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";

import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Header />
          <div className="app__mainContent">
            <Sidebar />
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
