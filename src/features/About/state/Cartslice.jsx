import { createSlice } from "@reduxjs/toolkit";
import { Cartactions } from "./Cartaction";

const Cartslice = createSlice({
  name: "cart",

  initialState: {
    cart: [],
    isLoading: false,
    error: null,
  },

  reducers: {
    clearcart:(state)=>{
        state.cart = []
    },
    incrementquantity:(state,action)=>{
      let product = state.cart.find((data)=>data.id === action.payload.id);
      if(product)
      {
        product.quantity += 1;
      }
    },
    decrementquntity:(state,action)=>{
      let product = state.cart.find((data)=>data.id === action.payload.id);

      if(product)
      {
        product.quantity -= 1
      }
    },
    removecart:(state,action)=>{
      state.cart = state.cart.filter((data)=>data.id !== action.payload.id);
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(Cartactions.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(Cartactions.fulfilled, (state, action) => {
  state.isLoading = false;

  const newProducts = action.payload.products ?? [];
console.log(newProducts);

  newProducts.forEach((product) => {
    const existingProduct = state.cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      existingProduct.quantity += product.quantity;
    } else {
      state.cart.push(product);
    }
  });
})

      .addCase(Cartactions.rejected, (state, action) => {
        state.isLoading = false;
        state.error =  action.error.message;
      });
  },
});
export const {clearcart,incrementquantity,decrementquntity,removecart} = Cartslice.actions;
export default Cartslice.reducer;