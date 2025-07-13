import React, { useState } from 'react'

const State = () => {

    const [count ,setCount]=useState(0);






   const handleIncrement=()=>{
        setCount(count+ 1)
    }

   const handleDecrement=()=>{

    setCount(count -1)
   }


  return (
   <div>
     <div>State</div>
     <p>{count}</p>

     <button onClick={handleIncrement}>+</button>
     {count === 0 ? <button disabled  onClick={handleDecrement}>-</button>: <button   onClick={handleDecrement}>-</button>}
   </div>
  )
}

export default State