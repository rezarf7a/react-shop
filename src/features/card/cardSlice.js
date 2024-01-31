import { createSlice } from "@reduxjs/toolkit";
import { sumPrice, sumQuantity } from "../../helper/helper";

const initialState = {
    selectedItems: [],
    itemCounter: 0,
    total: 0,
    checkOut: false
};

const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        addItem: (state, action)=> {
            if(!state.selectedItems.find(item => item.id === action.payload.id)){
                state.selectedItems.push({...action.payload, quantity: 1});
                state.itemCounter = sumQuantity(state.selectedItems);
                state.total = sumPrice(state.selectedItems);
                state.checkOut = false;
            }
        },

        removeItem: (state, action) => {
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id);
            state.selectedItems = newSelectedItems;
            state.itemCounter = sumQuantity(state.selectedItems);
            state.total = sumPrice(state.selectedItems);
            state.checkOut = false;
        },

        increase: (state, action) => {
            const itemIndex = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[itemIndex].quantity++;
            state.itemCounter = sumQuantity(state.selectedItems);
            state.total = sumPrice(state.selectedItems);
            state.checkOut = false;
        },

        decrease: (state, action) => {
            const itemIndex = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[itemIndex].quantity--;
            state.itemCounter = sumQuantity(state.selectedItems);
            state.total = sumPrice(state.selectedItems);
            state.checkOut = false;
        },

        checkOut: (state) => {
            state.selectedItems = [];
            state.itemCounter = 0;
            state.total = 0;
            state.checkOut = true;
        }
    }
})

export default cardSlice.reducer;

export const {addItem, removeItem, increase, decrease, checkOut} = cardSlice.actions