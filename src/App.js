// import logo from './logo.svg';
import './App.css';
import NunuCanvas from './NunuCanvas';

// import ScriptTag from 'react-script-tag';

// const Nunu = props => (
//   <ScriptTag type="text/javascript" src="public/nunustudio/nunu.min.js"></ScriptTag>
// );

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <NunuCanvas></NunuCanvas>

    </div>
  );
}

export default App;
