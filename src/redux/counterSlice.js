import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name : "counterSlice",
    initialState : { count:0 },
    reducers : {
        // actions  increment, decrement, reset, increment by amount .
        // define action
        increment : (state)=>{
            state.count++
        } ,
        decrement : (state)=>{
            state.count--
        } ,
        reset : (state)=>{
             // direct asignment of a value is invalid in REDUX so it will put as  return {...state,count:0 }
            return {...state,count:0 }  
        } ,
        incrementByAmount:(state,valueFromComponent)=>{
            state.count += +valueFromComponent.payload
        }

    }
})

export const {increment,decrement,reset,incrementByAmount} = counterSlice.actions    // for components
export default counterSlice.reducer                                // for store