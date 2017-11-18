import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Components/Test';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Test/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Chào mừng bạn đến với ReactJS nha!</h1>
        </header>
        <p className="App-intro">
          Để bắt đầu, chỉnh sửa file <code>src/App.js</code> save và load lại.
        </p>


      </div>
    );
  }
}

export default App;
