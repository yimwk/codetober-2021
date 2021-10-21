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
import Tick from "./pages/Tick/Tick"
import Helmet from "./pages/Helmet/Helmet"
import Compass from "./pages/Compass/Compass"
import Collide from "./pages/Collide/Collide"
import Moon from "./pages/Moon/Moon"
import Loop from "./pages/Loop/Loop"
import Sprout from "./pages/Sprout/Sprout"
import Fuzzy from "./pages/Fuzzy/Fuzzy"
import Open from "./pages/Open/Open"

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
      "url": "/tick"
    },
    {
      "title": "HELMET",
      "url": "/helmet"
    },
    {
      "title": "COMPASS",
      "url": "/compass"
    },
    {
      "title": "COLLIDE",
      "url": "/collide"
    },
    {
      "title": "MOON",
      "url": "/moon"
    },
    {
      "title": "LOOP",
      "url": "/loop"
    },
    {
      "title": "SPROUT",
      "url": "/sprout"
    },
    {
      "title": "FUZZY",
      "url": "/fuzzy"
    },
    {
      "title": "OPEN",
      "url": "/open"
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
            <Route path="/tick">
              <Tick/>
            </Route>
            <Route path="/helmet">
              <Helmet/>
            </Route>
            <Route path="/compass">
              <Compass/>
            </Route>
            <Route path="/collide">
              <Collide/>
            </Route>
            <Route path="/moon">
              <Moon/>
            </Route>
            <Route path="/loop">
              <Loop/>
            </Route>
            <Route path="/sprout">
              <Sprout/>
            </Route>
            <Route path="/fuzzy">
              <Fuzzy/>
            </Route>
            <Route path="/open">
              <Open/>
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
