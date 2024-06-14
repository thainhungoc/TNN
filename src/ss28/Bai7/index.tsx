import React, { Component } from 'react'
import Post from './Post '

export interface book{
    id:number, title:string, content:string, author:string
}
type StateType={
    book:book
}
export default class Bai7 extends Component<{},StateType> {
    constructor(props:{}){
        super(props)
        this.state={
            book:{
                id:1,
                title:"Sach nham",
                content:"nono",
                author:"TA"
            }
        }
    }
  render() {
    return (
      <div>
        <Post listBook={this.state.book}/>
      </div>
    )
  }
}
