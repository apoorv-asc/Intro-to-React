import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      
      <ParentComponent />

      {/* <EventBind /> */}

      {/* <ClassClick /> */}

      {/* <FunctionClick></FunctionClick> */}

      {/* <Counter /> */}

      {/* <Message/> */}

      {/* <Greet name="Damon" heroName="Vampire"/>
      <Greet name="Klaus " heroName="Hybrid">
        <p>Hello there love</p>
      </Greet>
      <Greet name="Caroline" heroName="Love">
        <button>Click me</button>
      </Greet> */}

      {/* <Welcome name="Damon" heroName="Vampire"/> */}


    </div>
  );
}

export default App;
