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
import Spirit from "./pages/Spirit/Spirit"
import Fan from "./pages/Fan/Fan"
import Watch from "./pages/Watch/Watch"
import Pressure from "./pages/Pressure/Pressure"
import Pick from "./pages/Pick/Pick"
import Sour from "./pages/Sour/Sour"
import Stuck from "./pages/Stuck/Stuck"
import Roof from "./pages/Roof/Roof"

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
      "url": "/spirit"
    },
    {
      "title": "FAN",
      "url": "/fan"
    },
    {
      "title": "WATCH",
      "url": "/watch"
    },
    {
      "title": "PRESSURE",
      "url": "/pressure"
    },
    {
      "title": "PICK",
      "url": "/pick"
    },
    {
      "title": "SOUR",
      "url": "/sour"
    },
    {
      "title": "STUCK",
      "url": "/stuck"
    },
    {
      "title": "ROOF",
      "url": "/roof"
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
            <Route path="/spirit">
              <Spirit/>
            </Route>
            <Route path="/fan">
              <Fan/>
            </Route>
            <Route path="/watch">
              <Watch/>
            </Route>
            <Route path="/pressure">
              <Pressure/>
            </Route>
            <Route path="/pick">
              <Pick/>
            </Route>
            <Route path="/sour">
              <Sour/>
            </Route>
            <Route path="/stuck">
              <Stuck/>
            </Route>
            <Route path="/roof">
              <Roof/>
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
