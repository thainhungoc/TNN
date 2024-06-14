import React, { Component } from 'react'
type PropsType = {
    id:number;
    name:string;
    price:number;
    quantity:number;
}

export default class Bai5 extends Component<PropsType> {
    constructor(props:PropsType){
        super(props);
        this.state = {
            id: 1,
            name: "Apple",
            price: 20000,
            quantity: 3,

        }
    }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
