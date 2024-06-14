import React, { Component } from "react";
import { stu } from ".";
type PropsType = {
  list: stu[];
};

export default class Student extends Component<PropsType> {
  constructor(props: PropsType) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Bai tap 3</h2>

        {this.props.list.map((item, index) => (
          <>
            <p>ID: {item.id}</p>
            <p>Ten: {item.name}</p>
            <p>Dia chi: {item.address}</p>
            <br></br>
          </>
        ))}
      </div>
    );
  }
}