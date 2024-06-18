import React, { useCallback, useMemo, useState } from "react";

const Memoo = () => {
  // memo la 1 hook dung de tang hieu nang bang cach ghi nho kq tinh toan ma ko can tinh toan
  const [arr, setArr] = useState([1, 2, 3]);
  const [count, setCount] = useState(0);
  const total = useMemo(() => {
    console.log("tinh total");
   return arr.reduce((temp, num) => temp + num, 0); //tinh tong
  }, [arr]);
  const handleRandom = () => {
    let number = Math.floor(Math.random() * 100);
    setArr([...arr, number]);
  };
  const handleIncrement = useCallback(()=>{
    console.log("goi ham handleIncrement")
    setCount(preCount => preCount+1);
  },[count])
  return (
    <div>
      {/* <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Tang</button> */}
      <Item count={count} handleIncrement={handleIncrement}/>
      <p>{total}</p>
      <button onClick={handleRandom}>Random</button>
    </div>
  );
};
export default Memoo