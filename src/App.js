import {Route, BrowserRouter as Router} from "react-router-dom";

import About from "./pages/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
import Discover from "./pages/Discover";
import Search from "./pages/Search";
import Wrapper from "./components/Wrapper";

import React from "react";


function App() {
  return (
    <Router>
      <div>
        <Route path = "/" component = {Navbar} />
        <Wrapper>
          <Route exact path = "/" component = {About} />
          <Route path = "/about" component = {About} />
          <Route path = "/discover" component = {Discover} />
          <Route path = "/search" component = {Search} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
