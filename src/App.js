import logo from './logo.svg';
import './App.css';
import Facebook from './Components/Facebook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          facebook auth
        </p>
        <h2 className="App-link" > to get started , authenticate with facebook </h2>
        <Facebook />
      </header>
      
    </div>
  );
}

export default App;
