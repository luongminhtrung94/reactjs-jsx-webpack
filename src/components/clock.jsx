import React, { Component } from 'react';


export default class Clock extends Component {
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
            {this.state.tick}
        </div>
      );
    }
}