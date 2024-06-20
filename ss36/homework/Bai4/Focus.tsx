import React, { useEffect, useRef } from 'react'
import { useAccordionButton } from 'react-bootstrap'

export const Focus = () => {
 useEffect(()=>{
    // focus vao o input

 },[])
 const input = useRef(null)
  return (
    <div>
         <input type="text" /> 
    </div>
  )
}
export default Focus
