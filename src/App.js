import { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: this.props.counter
    }
  }
  
  incPlus = () => {
    this.setState(state => ({
      counter: state.counter + 1
    }));
  }
  decMinys = () => {
    this.setState(state => ({
      counter: state.counter - 1
    }));
  }

  rndNum = () => {
    this.setState(({
        counter: +(Math.random() * (50 - -50) + -50).toFixed(0)
    }));
  }

  resetN = () => {
    this.setState(({
      counter: this.props.counter
    }));
  }

  render() {
    const {counter} = this.state;
    return (
      <div className="app">
        <div className="counter">{counter}</div>
        <div className="controls">
          <button onClick={this.incPlus}>INC</button>
          <button onClick={this.decMinys}>DEC</button>
          <button onClick={this.rndNum}>RND</button>
          <button onClick={this.resetN}>RESET</button>
        </div>
      </div>
    )
  }
}

export default App;
