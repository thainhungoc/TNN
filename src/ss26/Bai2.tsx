import React, { Component } from 'react'

export default class Bai2 extends Component {
    constructor(props:any){
        super(props)
    }
    cong(a:number, b:number):any{
        let cong = a + b;
        return `${a} + ${b} = ${cong}`
    }
    tru(a:number, b:number){
        let tru = a - b;
        return `${a} - ${b} = ${tru}`
    }
    nhan(a:number, b:number){
        let nhan = a * b;
        return `${a} * ${b} = ${nhan}`
    }
    chia(a:number, b:number){
        let chia = a / b;
        return `${a} / ${b} = ${chia}`
    }


  render() {
    return (
      <div>
        <h2>Bài tập 2</h2>
        <ul>
            <li>{this.cong(4, 3)}</li>
            <li>{this.tru(7, 4)}</li>
            <li>{this.nhan(6, 3)}</li>
            <li>{this.chia(32, 4)}</li>
        </ul>
      </div>
    )
  }
}
