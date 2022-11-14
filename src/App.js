import logo from './logo.svg';
import './App.css';
import TaskList from './components/containers/task.list';
// import Greeting from './components/pure/greeting'
// import GreetingF from './components/pure/greetingFunction'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/** Componente greeting */}
        {/**<Greeting name='Federico'></Greeting> <GreetingF name='Federico'></GreetingF>*/}

        <TaskList></TaskList>

      </header> 
    </div>
  );
}

export default App;
