/* eslint-disable no-unused-vars */

import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/greeting'
// import GreetingF from './components/pure/greetingFunction'


import {TaskListClass, TaskListFunction} from './components/containers/task.list';
import { GreetingStyled } from './components/pure/greeting.function.styled';
// import Ejemplo1 from './hooks/ejemplo1.useState';
// import Ejemplo2 from './hooks/ejemplo2.useEffect';
// import Ejemplo3 from './hooks/ejemplo3.useContext';
// import Ejemplo4 from './hooks/ejemplo4.propsChildren';
// import LifeCycleExample from './components/pure/lifeCycleExample';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/** Componente greeting */}
        {/**<Greeting name='Federico'></Greeting> <GreetingF name='Federico'></GreetingF>*/}
        {/**<TaskList></TaskList>*/}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <Ejemplo3></Ejemplo3> */}
        {/* <Ejemplo4 name={'Federico'}>
          <li>Hijo 1</li>
          <li>Hijo 2</li>
          <li>Hijo 3</li>
        </Ejemplo4> */}
        {/* <LifeCycleExample></LifeCycleExample> */}
        {/* <TaskListClass></TaskListClass> */}
        {/* <TaskListFunction></TaskListFunction> */}

        <GreetingStyled name={'Federico'}></GreetingStyled>

      </header> 
    </div>
  );
}

export default App;
