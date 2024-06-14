import React, { Component } from "react";
type StateType = {
  printf: string;
};
export default class Bai2 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      printf: "",
    };
    this.input = this.input.bind(this);
  }
  input(e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.target.value;

    this.setState({
      printf: value,
    });
  }

  render() {
    return (
      <div>
        <h2>Bài 2</h2>
        <h4>dữ liệu đã nhập: {this.state.printf}</h4>
        <input
          type="text"
          value={this.state.printf}
          onChange={this.input}
        />
      </div>
    );
  }
}