/* eslint-disable no-unused-vars */

// import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/greeting'
// import GreetingF from './components/pure/greetingFunction'


import { Father } from './components/containers/father';
import {TaskListClass, TaskListFunction} from './components/containers/task.list';
import { LoginFormik } from './components/pure/form/loginFormik';
import { RegisterFormik } from './components/pure/form/registerFormik';
import { GreetingStyled } from './components/pure/greeting.function.styled';
import { OptionalRender } from './components/pure/optionalRender';
// import Ejemplo1 from './hooks/ejemplo1.useState';
// import Ejemplo2 from './hooks/ejemplo2.useEffect';
// import Ejemplo3 from './hooks/ejemplo3.useContext';
// import Ejemplo4 from './hooks/ejemplo4.propsChildren';
// import LifeCycleExample from './components/pure/lifeCycleExample';

function App() {
  return (
    <div className="container-sm App">

        <TaskListClass></TaskListClass>

    </div>
  );
}

export default App;
