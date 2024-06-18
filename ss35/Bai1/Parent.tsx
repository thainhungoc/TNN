import React, { useState } from 'react'
export const Parent = () => {
    const [name, setName] = useState("TNN")
  return (
    <div>
      <h3>Bai 1</h3>
        <p>{name}</p>
        
    </div>
  )
}
