import { IProduct } from "@/types/globalTypes";
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IWish {
    products: IProduct[];
}

const initialState: IWish = {
    products: [],
};

const wishSlice = createSlice({
    name: 'wish',
    initialState,
    reducers: {
        addToWishList: (state, action: PayloadAction<IProduct>) => {
            state.products.push(action.payload);
        },
    },
})

export const {  addToWishList } = wishSlice.actions;

export default wishSlice.reducer; 