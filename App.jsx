import React, { Component } from "react";
import ChildComponent from "./LifeCycleMethods/ChildComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showChild: true,
      appState: 1, 
    };
  }

  componentDidMount() {
    
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        appState: prevState.appState + 1,
      }));
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleChild = () => {
    this.setState((prevState) => ({
      showChild: !prevState.showChild,
    }));
  };

  render() {
    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>React Lifecycle Demo</h1>
        <button onClick={this.toggleChild}>Toggle Child Component</button>
        <p>App State (updates every 5s): {this.state.appState}</p>

        
        {this.state.showChild && <ChildComponent />}
      </div>
    );
  }
}

export default App;
