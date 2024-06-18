import React, { memo } from'react'
type PropType = {
    count:number,
    handleIncrement :()=>void 
}
const Item = ({count, handleIncrement}:PropType) =>{
    return(
        <div>
            <p>{count}</p>
            <button onClick={handleIncrement}>Tang</button>
        </div>
    )
    
}
export default memo(Item)