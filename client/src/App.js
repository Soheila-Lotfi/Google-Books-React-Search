import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Searchbook from "./pages/Searchbook";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";


function App() {
    return (
        <Router>
            <div>
                <Header />
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


