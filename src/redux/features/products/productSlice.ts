import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from "@reduxjs/toolkit";

interface IProduct {
    status: boolean;
    priceRange: number;
    title: string;
}

const initialState: IProduct = {
  status: false,
  priceRange: 150,
  title: 'HardCover',
};

const productSlice =  createSlice({
    name: 'product',
    initialState,
    reducers: {
        toggleState: (state) => {
            state.status = !state.status;
        },
        setPriceRange: (state, action: PayloadAction<number>) =>{
            state.priceRange = action.payload;
        },
        searchProduct: (state, action: PayloadAction<string>) => {
            state.title = action.payload;
        },
    },
});

export const { toggleState, setPriceRange, searchProduct } = productSlice.actions;

export default productSlice.reducer;