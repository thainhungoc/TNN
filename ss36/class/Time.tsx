import React, { useRef } from 'react'
//rafc
export const Time = () => {
    const input = useRef<HTMLInputElement>(null);
    const printInput = () =>{
        console.log(input.current?.value)
    }
  return (
    <div>
        <h1>Time</h1>
        <h2>00:00:00</h2>
        <input ref={input} type='text' placeholder='Nhap' value={"abc..."}/>
        <button onClick={printInput}>In gia tri cua o input</button>

    </div>
  )
}
