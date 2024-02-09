import { createSlice } from "@reduxjs/toolkit";

const addtoCartSlices = createSlice({

    name: 'addtoCart',
    initialState: {
        items: []
    },

    reducers: {
        additems: (state, action) => {
            state.items.push(action.payload)
        },

        clearItems : (state) => {
            state.items = null
        }
    }
})

export const { additems , clearItems } = addtoCartSlices.actions
export default addtoCartSlices.reducer;