import { createSlice } from "@reduxjs/toolkit";
import { instanceAxios } from "../axiosClient";

export const productSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
        detail: {}
    },
    reducers: {
        setProducts: (state, action) => {
            state.data= action.payload;
        },
        setDetailProduct: (state, action) => {
            state.detail = action.payload;
        },
    },
});

export const { setProducts, setDetailProduct } = productSlice.actions;

export const fetchProducts = () => {
    return async (dispatch) => {
        const { data } = await instanceAxios.get('/cars', {
            // headers: {
            //     Authorization: `Bearer ${localStorage.getItem("access_token")}`
            // }
        });
        // console.log(data, "======= ini data fetch nya");
        
        dispatch(setProducts(data));
    };
};

export default productSlice.reducer;
