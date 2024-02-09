import { configureStore } from "@reduxjs/toolkit"
import addtoCartSlices from "../slices/addtoCartSlices";
import searchSlices from "../slices/searchSlices";

const store = configureStore({
    reducer: {
        addtoCart : addtoCartSlices,
        search : searchSlices
    }
  
  })
  
  export default store;