import React, { Component } from 'react';
import { render } from 'react-dom';

// compoentn
import Clock from "./clock";


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tick: "Time"
        };
    }

    tick(){
        this.setState({
            tick : new Date().toLocaleTimeString()
        })
    }
    componentDidMount(){
        setInterval( () => this.tick(), 1000);
    }
  
    render() {
      return (
        <div>
          Hello from react es6
          <Clock />
        </div>
      );
    }
}


render(<App />, document.getElementById('app'));