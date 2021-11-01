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
import Leak from "./pages/Leak/Leak"
import Extinct from "./pages/Extinct/Extinct"
import Splat from "./pages/Splat/Splat"
import Connect from "./pages/Connect/Connect"
import Spark from "./pages/Spark/Spark"
import Crispy from "./pages/Crispy/Crispy"
import Patch from "./pages/Patch/Patch"
import Slither from "./pages/Slither/Slither"
import Risk from "./pages/Risk/Risk"
import Bonus from "./pages/Bonus/Bonus"

function App() {

  const prompts = [
    {
      "title": "CRYSTAL",
      "url": "/crystal",
      "component": Crystal
    },
    {
      "title": "SUIT",
      "url": "/suit",
      "component": Suit
    },
    {
      "title": "VESSEL",
      "url": "/vessel",
      "component": Vessel
    },
    {
      "title": "KNOT",
      "url": "/knot",
      "component": Knot
    },
    {
      "title": "RAVEN",
      "url": "/raven",
      "component": Raven
    },
    {
      "title": "SPIRIT",
      "url": "/spirit",
      "component": Spirit
    },
    {
      "title": "FAN",
      "url": "/fan",
      "component": Fan
    },
    {
      "title": "WATCH",
      "url": "/watch",
      "component": Watch
    },
    {
      "title": "PRESSURE",
      "url": "/pressure",
      "component": Pressure
    },
    {
      "title": "PICK",
      "url": "/pick",
      "component": Pick
    },
    {
      "title": "SOUR",
      "url": "/sour",
      "component": Sour
    },
    {
      "title": "STUCK",
      "url": "/stuck",
      "component": Stuck
    },
    {
      "title": "ROOF",
      "url": "/roof",
      "component": Roof
    },
    {
      "title": "TICK",
      "url": "/tick",
      "component": Tick
    },
    {
      "title": "HELMET",
      "url": "/helmet",
      "component": Helmet
    },
    {
      "title": "COMPASS",
      "url": "/compass",
      "component": Compass
    },
    {
      "title": "COLLIDE",
      "url": "/collide",
      "component": Collide
    },
    {
      "title": "MOON",
      "url": "/moon",
      "component": Moon
    },
    {
      "title": "LOOP",
      "url": "/loop",
      "component": Loop
    },
    {
      "title": "SPROUT",
      "url": "/sprout",
      "component": Sprout
    },
    {
      "title": "FUZZY",
      "url": "/fuzzy",
      "component": Fuzzy
    },
    {
      "title": "OPEN",
      "url": "/open",
      "component": Open
    },
    {
      "title": "LEAK",
      "url": "/leak",
      "component": Leak
    },
    {
      "title": "EXTINCT",
      "url": "/extinct",
      "component": Extinct
    },
    {
      "title": "SPLAT",
      "url": "/splat",
      "component": Splat
    },
    {
      "title": "CONNECT",
      "url": "/connect",
      "component": Connect
    },
    {
      "title": "SPARK",
      "url": "/spark",
      "component": Spark
    },
    {
      "title": "CRISPY",
      "url": "/crispy",
      "component": Crispy
    },
    {
      "title": "PATCH",
      "url": "/patch",
      "component": Patch
    },
    {
      "title": "SLITHER",
      "url": "/slither",
      "component": Slither
    },
    {
      "title": "RISK",
      "url": "/risk",
      "component": Risk
    }
  ]

  return (
    <Router>
      <div className="App">
        <div className="App-title"><Link to="/">Codetober 2021</Link></div>
        <div className="App-body">
          <Switch>
            {prompts.map(prompt => {
              if (prompt.url === "") {
                return <li>{prompt.title}</li>;
              }
              return <Route path={`/${prompt.title}`} component={prompt.component} />;
            })}
            <Route path="/bonus" component={Bonus} />
            <Route path="/">
              <ol>
                {prompts.map(prompt => {
                  return <li><Link to={prompt.url}>{prompt.title}</Link></li>;
                })}
              </ol>
              <div><Link to="/bonus">BONUS CONTENT</Link></div>
            </Route>
          </Switch>
          <div>#inktober2021</div>
        </div>
      </div>
    </Router>
  );
}

export default App;
