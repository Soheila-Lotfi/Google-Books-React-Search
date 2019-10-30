import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Searchbook from "./pages/Searchbook";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";


function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Jumbotron />
                <Switch>
                    <Route exact path="/" component={Searchbook} />
                    <Route exact path="/searchbook" component={Searchbook} />
                    <Route exact path="/saved" component={Saved} />
                    <Route component={NoMatch} />
                </Switch>
          
            </div>
        </Router>
    )

}

export default App;


