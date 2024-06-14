import React, { Component } from 'react';

class User {
  name: string;
  sex: string;
  day: string;
  email: string;
  address: string;

  constructor(name: string, sex: string, day: string, email: string, address: string) {
    this.name = name;
    this.sex = sex;
    this.day = day;
    this.email = email;
    this.address = address;
  }
}

export default class Bai3 extends Component {
  render() {
    const user = new User("Nhu Ngoc", "Nu", "08/10/2005", "ngoc@gmail.com", "BD");

    return (
      <div>
        <h2>Bài tập 3</h2>
        <ul>
          <li>{user.name}</li>
          <li>{user.sex}</li>
          <li>{user.day}</li>
          <li>{user.email}</li>
          <li>{user.address}</li>
        </ul>
      </div>
    );
  }
}
