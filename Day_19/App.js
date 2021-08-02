import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter1: 0,
      counter2: 0,
      counter3: 0,
    };
    console.log(this.state);
  }

  render() {
    return (
      <div className="container">
        <div className="btns">
          <button
            onClick={() => {
              this.setState({ counter1: this.state.counter1 + 1 });
            }}
          >
            {this.state.counter1}
          </button>
          <button
            onClick={() => {
              this.setState({ counter2: this.state.counter2 + 1 });
            }}
          >
            {this.state.counter2}
          </button>
          <button
            onClick={() => {
              this.setState({ counter3: this.state.counter3 + 1 });
            }}
          >
            {this.state.counter3}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
