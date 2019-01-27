import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//引入Home组件
import Home from './components/Home';
import Attrs from './components/Attrs';
import MyButton from  './components/MyButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home></Home>
        <Attrs></Attrs>
        <MyButton></MyButton>
      </div>
    );
  }
}

export default App;
