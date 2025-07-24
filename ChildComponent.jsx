
import React,{Component} from "react";
// import { useState } from "react";
class ChildComponent extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            counter:0
        };
        console.log("ChildComponent: Constructor");
    }
    componentDidMount()
    {
        console.log("ChildComponent: Component Did Mount")
    };
    shouldComponentUpdate(nextProps,nextState){
        if(this.state.counter!=nextState.counter){
            console.log("ChildComponent: Should Component Update → true");
            return true;
        }
        console.log("ChildComponent: Should Component Update → false");
        return false;
    };
    componentDidiUpdate(){
        console.log("ChildComponent: Component Did Update")
    };
    componentWillUnmount(){
        console.log("CildComponent:Component Will Unmount")
    }
    incrementCounter = () => {
            this.setState((prevState) => ({
              counter: prevState.counter + 1,
            }));
          };
          render() {
                return (
                  <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}>
                    <h2>Child Component</h2>
                    <p>Counter: {this.state.counter}</p>
                    <button onClick={this.incrementCounter}>Increment</button>
                  </div>
                );
              }
    
}
export default ChildComponent;
