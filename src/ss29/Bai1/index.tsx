// Tạo một component đặt tên theo tùy ý. Ví dụ: Exercise01

// Trong component đó, tạo một button có nội dung là “Click me”

// Bắt sự kiện onClick trên button và in ra màn hình console nội dung “Clicked”
import React, { Component } from "react";

type StateType = {
  printf: string;
};

export default class Bai1 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      printf: "",
    };
    this.outPut = this.outPut.bind(this);
  }
  outPut() {
    this.setState({ printf: "Đã click" });
  }

  render() {
    return (
      <div>
        <h2>Bài 1</h2>
        <h4>{this.state.printf}</h4>
        <button onClick={this.outPut}>click me</button>
      </div>
    );
  }
}