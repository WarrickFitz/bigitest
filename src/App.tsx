import './App.css';

import * as BigInteger from 'bigi';
import * as React from 'react';

import logo from './logo.svg';

class App extends React.Component {

  public test() {
    const r = new Uint8Array(1);
    r[0]=1;

    const rBigInteger = BigInteger.fromBuffer(r);
    console.log(rBigInteger);

  }


  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <button onClick={this.test}>test</button>
        </p>
      </div>
    );
  }
}

export default App;
