import { createSlice } from "@reduxjs/toolkit";
import { hydratedapi, loginapi, registerapi } from "./authactions";



export const authsilce = createSlice({
  name: "auth",
  initialState : {
  login: null,
  isLoading: false,
  isAuthenticated: false,
},
reducers: {
    adduser: (state, action) => {
      state.login = action.payload;
      state.isLoading = false;
      state.isAuthenticated = false;
    },

    removeuser: (state) => {
      state.login = null;
      state.isLoading = false;
      state.isAuthenticated = true;
    },
  },

  extraReducers: (builders) => {
    builders
      .addCase(loginapi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginapi.fulfilled, (state, action) => {
        state.login = action.payload;
        state.isLoading = false;
        state.isAuthenticated = true;
      })
      .addCase(loginapi.rejected, (state) => {
        state.login = null;
        state.isLoading = false;
        state.isAuthenticated = false;
      })

      .addCase(registerapi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerapi.fulfilled, (state, action) => {
        state.login = action.payload;
        state.isLoading = false;
        state.isAuthenticated = true;
      })
      .addCase(registerapi.rejected, (state) => {
        state.login = null;
        state.isLoading = false;
        state.isAuthenticated = false;
      })

      .addCase(hydratedapi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(hydratedapi.fulfilled, (state, action) => {
        state.login = action.payload;
        state.isLoading = false;
        state.isAuthenticated = true;
      })
      .addCase(hydratedapi.rejected, (state) => {
        state.login = null;
        state.isLoading = false;
        state.isAuthenticated = false;
      });
  },
});

export const { adduser, removeuser, reset } = authsilce.actions;
export default authsilce.reducer;