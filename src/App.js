import './App.css';
import React from 'react';
import Home from './Components/Function/Home';
import Welcome from './Components/Class/Welcome';
import Message from './Components/Class/Message';
import Counter from './Components/Class/Counter';
import FunctionClick from './Components/Function/FunctionClick';
import ClassClick from './Components/Class/ClassClick'
import EventBind from './Components/EventBind';
import ParentCoponent from './Components/ParentCoponent';
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';
class App extends React.Component {

  render() {
    return (
      <div className="App" >
        <Home name=" hiten " />
        <hr />
        <Welcome name=" Jason" />
        <hr />
        <Message />
        <hr />
        <Counter />
        <hr />
        <FunctionClick />
        <hr />
        <ClassClick />
        <hr />
        <EventBind />
        <hr />
        <ParentCoponent />
        <hr />
        <UserGreeting />
        <hr />
        <NameList />
      </div>
    );
  }
}
export default App;
