import logo from './esfera.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Todo sobre DragonBall
        </p>
        <a
          className="App-link"
          href="https://dragonball.fandom.com/es/wiki/Dragon_Ball_Wiki_Hispano"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pushale aquí
        </a>
      </header>
    </div>
  );
}

export default App;
