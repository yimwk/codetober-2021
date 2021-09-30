import logo from './logo.svg';
import './App.css';

function App() {

  const prompts = [
    "CRYSTAL",
    "SUIT",
    "VESSEL",
    "KNOT",
    "RAVEN",
    "SPIRIT",
    "FAN",
    "WATCH",
    "PRESSURE",
    "PICK",
    "SOUR",
    "STUCK",
    "ROOF",
    "TICK",
    "HELMET",
    "COMPASS",
    "COLLIDE",
    "MOON",
    "LOOP",
    "SPROUT",
    "FUZZY",
    "OPEN",
    "LEAK",
    "EXTINCT",
    "SPLAT",
    "CONNECT",
    "SPARK",
    "CRISPY",
    "PATCH",
    "SLITHER",
    "RISK"
  ]

  return (
    <div className="App">
      <div className="App-body">
        <div className="App-title">Inktober 2021</div>
        <ol>
        {prompts.map(prompt => {
            return <li>{prompt}</li>;
        })}
        </ol>
      </div>
    </div>
  );
}

export default App;
