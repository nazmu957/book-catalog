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
            const existing = state.products.find(
                (product)=> product._id === action.payload._id
            );
            if (existing){
                existing.quantity = existing.quantity! + 1;
            }
            else {

                state.products.push({...action.payload, quantity: 1});
            }
        },
    },
})

export const {  addToWishList } = wishSlice.actions;

export default wishSlice.reducer; 