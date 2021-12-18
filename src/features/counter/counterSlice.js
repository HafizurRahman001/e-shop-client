import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchProducts = createAsyncThunk(
  'users/fetchByIdStatus',
  async () => {
    const response = await fetch('http://localhost:5000/products')
      .then(res => res.json())
    return response
  }
);
export const fetchFilterProducts = createAsyncThunk(
  'users/fetchFilterProducts',
  async (param) => {
    const response = await fetch(`http://localhost:5000/details/${param}`)
      .then(res => res.json())
    return response
  }
);


export const fetchCart = createAsyncThunk(
  'users/fetchCart',
  async () => {
    const response = await fetch('http://localhost:5000/cart-products')
      .then(res => res.json())
    return response
  }
);

export const purchaseDetails = createAsyncThunk(
  'users/fetchByIdStatus',
  async (data) => {
    const response = await fetch('http://localhost:5000/purchase-details', {
      method: 'POST',
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
    return response
  }
);




export const productsSlice = createSlice({
  name: 'Products-sale',
  initialState: {
    products: [],
    details: [],
    filterProducts: [],
    cart: [],
    user: []
  },
  // The `reducers` field lets us define reducers and generate associated actions

  reducers: {
    addToCart: (state, { payload }) => {
      state.cart.push(payload);
    },

    removeFromCart: (state, { payload }) => {
      window.alert('are your want to remove it')
      state.cart = state.cart.filter((product) => product._id !== payload);
    },

    //add new reducer here


  },

  extraReducers: (builder) => {

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.cart = action.payload;
      })
      .addCase(fetchFilterProducts.fulfilled, (state, action) => {
        state.filterProducts = action.payload;
      })
  },





});

export const { addToCart, removeFromCart, incrementByAmount } = productsSlice.actions;
export default productsSlice.reducer;
