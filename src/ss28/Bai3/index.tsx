import { Component } from "react";
import Student from "./Stu.tsx";
export interface stu {
  id: number;
  name: string;
  address: string;
}
type StateType = {
  user: stu[];
};
export default class Bai3 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      user: [
        { id: 1, name: "Ngoc", address: "Binh Duong" },
        { id: 2, name: "Kha", address: "Dong Nai" },
        { id: 3, name: "Bao Tan", address: "TP HCM" },
        { id: 4, name: "Tam Anh", address: "TP HCM" },
      ],
    };
  }
  render() {
    return (
      <div>
        <Student list={this.state.user} />
      </div>
    );
  }
}