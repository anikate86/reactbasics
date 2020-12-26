import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet'
import Form from './components/Form';
import RefsDemo from './components/RefsDemo';
import FRParentInput from './components/FRparentinput';
import ErrorBoundary from './components/ErrorBoundary';
import Hero from './components/Hero';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import HookCounterOne from './components/HookCounterOne';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import DataFetching from './components/DataFetching';
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';
import  HookTimer  from './components/HookTimer';
import  FocusInput  from './components/FocusInput';
import UserForm from './components/UserForm';

class App extends Component{
  render(){
  return (
    <div className="App">
      <UserForm />
      {/* <FocusInput /> */}
      {/* <HookTimer /> */}
      {/* <DataFetchingOne /> */}
      {/* <DataFetchingTwo /> */}
      {/* <DataFetching /> */}
      {/* <MouseContainer /> */}
      {/* <HookMouse /> */}
      {/* <HookCounterOne /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <HookCounter /> */}
      {/* <PostForm /> */}
      {/* <PostList /> */}
      {/* <HoverCounter />
      <ClickCounter  name ="Anikate"/> */}
      {/* <ErrorBoundary>
      <Hero heroName ="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName ="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName ="Joker" />
      </ErrorBoundary> */}
      {/* <FRParentInput /> */}
      {/* <RefsDemo /> */}
      {/* <Form /> */}
      {/* <Stylesheet  primary={true} /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Hello /> */}
      {/* <Greet name ='tonu' heroName ='Batman' >
        <p> this is children props</p>
      </Greet>
      <Greet name ='monu' />
      <Greet name ='sonu'  />
      <Welcome  name ='tonu' heroName ='Batman'/>
      <Welcome name ='monu'/>
      <Welcome name ='sonu' />  */}
    </div>
  );
 }
}

export default App;
