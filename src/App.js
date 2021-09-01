//import Header from "./components/Header";
//import Footer from "./components/Footer";
import React, { Component } from "react";
import AboutMe from "./pages/aboutme";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import Home from "./pages/index"
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import { Route, Switch, HashRouter } from "react-router-dom"
import "./App.css"

class App extends Component {
  render() {
    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path='/portfolio'>
              <Portfolio />
              <Footer />
            </Route>
            <Route exact path={'/'}>
              <Home />
            </Route>
            <Route path='/contact'>
              <Contact />
              <Footer />
            </Route>
            <Route path='/aboutme'>
              <AboutMe />
              <Footer />
            </Route>
          </Switch>
        </div>
      </HashRouter>
    );

  }
}
  
//<Header /><Footer />
export default App;
