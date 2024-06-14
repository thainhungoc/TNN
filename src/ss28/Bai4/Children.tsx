import React, { Component } from "react";

type PropsType = {
  name: string;
};
type StateType = {
  name: string;
};
export default class Children extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      name: "Khang Tran",
    };
  }
  render() {
    return (
      <div>
        <h2>Bai tap 4</h2>
        <p>The cha la: {this.props.name}</p>
        <p>The con la: {this.state.name}</p>
      </div>
    );
  }
}