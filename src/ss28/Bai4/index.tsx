import React, { Component } from "react";

import Children from "./Children";

type StateType = {
  name: string;
};

export default class Bai4 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: "Nguyễn Đình Kha ",
    };
  }
  render() {
    return (
      <div>
        <Children name={this.state.name} />
      </div>
    );
  }
}