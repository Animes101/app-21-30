import React, { useState } from 'react'

const State = () => {

    const [count ,setCount]=useState(0);




   const handlePrent=(e)=>{

    console.log('parent')

   }

   const handleIncrement=(e)=>{
        e.stopPropagation();
        setCount((prepCou)=> prepCou +1)
    }

   const handleDecrement=(e)=>{
        e.stopPropagation();

    setCount((prevCount)=>count - 1)
   }


  return (
   <div onClick={handlePrent}>
     <div>State</div>
     <p>{count}</p>

     <button onClick={handleIncrement}>+</button>
     {count === 0 ? <button disabled  onClick={handleDecrement}>-</button>: <button   onClick={handleDecrement}>-</button>}
   </div>
  )
}

export default State