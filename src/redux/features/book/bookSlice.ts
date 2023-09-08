import { IProduct } from "@/types/globalTypes";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ICart {
    products: IProduct[];
}

const initialState: ICart = {
    products: [],
};

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        bookList: (state, action: PayloadAction<IProduct>) => {
            state.products.push(action.payload);
        },
        
    },
});


export const {bookList} = bookSlice.actions;
export default bookSlice.reducer;
