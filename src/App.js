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
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './components/appStyle.css'
import styles from './components/appStyles.module.css'


function App() {
  return (
    <div className="App">
      
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Inline /> */}
      {/* <Stylesheet primary={!false}/> */}

      {/* <NameList /> */}

      {/* <UserGreeting /> */}
      
      {/* <ParentComponent /> */}

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
