import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';


export const fetchDB = createAsyncThunk(
  "products/fetchDB", async () => {

  } 
);

const initialState = {
  productsValue: [],
  status: null
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {}
});

export default productSlice.reducer;