import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting'
import GreetingF from './components/pure/greetingFunction'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/** Componente greeting */}
        <Greeting name='Federico'></Greeting>
        <GreetingF name='Federico'></GreetingF>

      </header> 
    </div>
  );
}

export default App;
