import React, { Component, useState } from 'react'
type StateType = {
    id:number
    name:string 
    price:number 
    quantity:number
}
export const Produce =()=> {
    const [user, setUser] = useState({id:1, name:"coca", price: 10000, quantity:3 })
    return (
      <div>
        <h3>Bai 2</h3>
        <p>Id: {user.id}</p>
        <p>Name: {user.name}</p>
        <p>Price: {user.price}</p>
        <p>Quantity: {user.quantity}</p>
      </div>
    )
  }
