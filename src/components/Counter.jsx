import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement,increment,incrementByAmount,reset } from '../redux/counterSlice'
const Counter = () => {
  const [amount,setAmount] = useState(0)
   const {count} = useSelector(state=>state.counterReducer)
  //  console.log(count);
   const dispatch = useDispatch()
   
   const handleIncrementAmount = ()=>{
    if(amount){
      // dispatch action with input amount
      dispatch(incrementByAmount(amount))
    }else{
      alert("please fill the form !!!")
    }
   }
  return (
    <div  className='border rounded text-center p-5'>
        <h1 style={{fontSize:'100px'}}> {count} </h1>
        <div style={{width:'500px'}} className='d-flex justify-content-between mt-5'>
            <button onClick={()=>dispatch(decrement())} className='btn btn-warning text-light'>DECREMENT</button>
            <button onClick={()=>dispatch(reset())} className='btn btn-danger '>RESET</button>
            <button onClick={()=>dispatch(increment())} className='btn btn-success'>INCREMENT</button>
        </div>
        <div className='d-flex justify-content-between align-items-center mt-5'>
            <input onChange={e=>setAmount(e.target.value)} className='form-control' type="text " placeholder='Input Increment Amount' />
            <button onClick={handleIncrementAmount} className='btn btn-primary ms-3'>Increment By Amount</button>
        </div>
    </div>
  )
}

export default Counter