import React, { ChangeEvent, Component } from "react";
type StateType = {
  date: string;
};
export default class Bai3 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      date: "",
    };
  }
  input = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    this.setState({
      date: value,
    });
  };
  render() {
    return (
      <div>
        <p>{this.state.date}</p>
        <input type="date" value={this.state.date} onChange={this.input} />
      </div>
    );
  }
}