import React, { useState } from "react";

export default function Bai4() {
  const [title, setTitle] = useState<boolean>(false);
  const change = () => {
    setTitle(!title);
  };

  return (
    <div>
      <button onClick={change}>Xin chao</button>
      <h5>{title ? "tieude" : ""}</h5>
    </div>
  );
}