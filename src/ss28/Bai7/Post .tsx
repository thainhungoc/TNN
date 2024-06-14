import React, { Component } from 'react'
import { book } from '.'

type PropsType={
    listBook:book
}

export default class Post  extends Component<PropsType> {
   
  render() {
    let {id,
        title,
        content,
        author}= this.props.listBook
    return (
      <div> 
        <p>id: {id}</p>
        <p>tieu de: {title}</p>
        <p>noi dung: {content}</p>
        <p>tac gia: {author}</p>
      </div>
    )
  }
}
