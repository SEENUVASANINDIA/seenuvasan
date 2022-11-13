import React, { Component } from 'react'

export class countClass extends Component {
constructor(){
    super();
    this.state={
        count:0,
        name:"seenu"
    };
}

clickable=() =>{

this.setState({
    count:this.state.count+1,
    name:"keerthana"
}
,() =>{
    console.log({"insidecallback":this.state.count});
}

);
console.log.apply({"outside":this.state.count});


}

  render() {
    return (
<div>
      <div>countClass{this.state.count}</div>
<button onclick={this.clickable}>Increment</button>
     
</div>
      )
  }
}

export default countClass