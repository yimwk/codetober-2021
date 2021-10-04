import './App.css';
import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Crystal from "./pages/Crystal/Crystal"
import Suit from "./pages/Suit/Suit"
import Vessel from "./pages/Vessel/Vessel"
import Knot from "./pages/Knot/Knot"
import Raven from "./pages/Raven/Raven"

function App() {

  const prompts = [
    {
      "title": "CRYSTAL",
      "url": "/crystal"
    },
    {
      "title": "SUIT",
      "url": "/suit"
    },
    {
      "title": "VESSEL",
      "url": "/vessel"
    },
    {
      "title": "KNOT",
      "url": "/knot"
    },
    {
      "title": "RAVEN",
      "url": "/raven"
    },
    {
      "title": "SPIRIT",
      "url": ""
    },
    {
      "title": "FAN",
      "url": ""
    },
    {
      "title": "WATCH",
      "url": ""
    },
    {
      "title": "PRESSURE",
      "url": ""
    },
    {
      "title": "PICK",
      "url": ""
    },
    {
      "title": "SOUR",
      "url": ""
    },
    {
      "title": "STUCK",
      "url": ""
    },
    {
      "title": "ROOF",
      "url": ""
    },
    {
      "title": "TICK",
      "url": ""
    },
    {
      "title": "HELMET",
      "url": ""
    },
    {
      "title": "COMPASS",
      "url": ""
    },
    {
      "title": "COLLIDE",
      "url": ""
    },
    {
      "title": "MOON",
      "url": ""
    },
    {
      "title": "LOOP",
      "url": ""
    },
    {
      "title": "SPROUT",
      "url": ""
    },
    {
      "title": "FUZZY",
      "url": ""
    },
    {
      "title": "OPEN",
      "url": ""
    },
    {
      "title": "LEAK",
      "url": ""
    },
    {
      "title": "EXTINCT",
      "url": ""
    },
    {
      "title": "SPLAT",
      "url": ""
    },
    {
      "title": "CONNECT",
      "url": ""
    },
    {
      "title": "SPARK",
      "url": ""
    },
    {
      "title": "CRISPY",
      "url": ""
    },
    {
      "title": "PATCH",
      "url": ""
    },
    {
      "title": "SLITHER",
      "url": ""
    },
    {
      "title": "RISK",
      "url": ""
    }
  ]

  return (
    <Router>
      <div className="App">
        <div className="App-title"><Link to="/">Codetober 2021</Link></div>
        <div className="App-body">
          <Switch>
            <Route path="/crystal">
              <Crystal/>
            </Route>
            <Route path="/suit">
              <Suit/>
            </Route>
            <Route path="/vessel">
              <Vessel/>
            </Route>
            <Route path="/knot">
              <Knot/>
            </Route>
            <Route path="/raven">
              <Raven/>
            </Route>
            <Route path="/">
              <ol>
              {prompts.map(prompt => {
                  if (prompt.url === "") {
                    return <li>{prompt.title}</li>;
                  }
                  return <li><Link to={prompt.url}>{prompt.title}</Link></li>;
              })}
              </ol>
            </Route>
          </Switch>
          <div>#inktober2021</div>
        </div>
      </div>
    </Router>
  );
}

export default App;
