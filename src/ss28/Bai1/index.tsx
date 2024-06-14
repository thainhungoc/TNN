import { Component } from 'react'
type StateType = {
    name:string;
}

export default class Bai1 extends Component<{},StateType> 
{
  constructor(props:{}){
    super(props)
    this.state = {name:"Ngoch"}
  }
  render() {
    return (
      <div>
        <h2>Bai tap 1</h2>
        <p>name: {this.state.name}</p>
      </div>
    )
  }
}
