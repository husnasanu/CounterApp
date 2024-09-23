import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";


// create a store to hold all states
const counterStore= configureStore({
    reducer:{
       counterReducer : counterSlice 
    }
   
})

export default counterStore 
