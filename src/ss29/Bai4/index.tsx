import React, { Component } from "react";

type StateType = {
  city: string;
};

export default class Bai4 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      city: "",
    };
    this.out = this.out.bind(this);
  }

  out(e: React.ChangeEvent<HTMLSelectElement>) {
    let value = e.target.value;
    this.setState({
      city: value,
    });
  }

  render() {
    return (
      <div>
        <h2>Bài 4</h2>
        <h4>Tỉnh/ Thành phố {this.state.city}</h4>
        <select name="tp" id="" value={this.state.city} onChange={this.out}>
          <option value="">Tỉnh/ Thành phố</option>
          <option value="hcm">TP HCM</option>
          <option value="bd">Bình Dương</option>
          <option value="dn">Đồng Nai</option>
          <option value="vt">Vũng Tàu</option>
          <option value="dl">Đà Lạt</option>
          
        </select>
      </div>
    );
  }
}