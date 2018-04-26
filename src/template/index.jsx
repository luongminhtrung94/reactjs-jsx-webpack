import React, { Component } from 'react';
import { render } from 'react-dom';


export default class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tick: "asd"
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
          Hello from react es6  {this.state.tick}
        </div>
      );
    }
}


render(<Hello />, document.getElementById('app'));