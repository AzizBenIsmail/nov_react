import logo from './logo.svg';
import './App.css';
import Narvbar from './composant/Narvbar';
import Footer from './composant/Footer';
function App() {
  return (
    <div>
      <Narvbar/>    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
