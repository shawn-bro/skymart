
import { createSlice } from "@reduxjs/toolkit";
import { hydratedapi, loginapi, registerapi } from "./authactions";

const initialState = {
  login: null,
  isLoading: false,
  isAuthenticated: false,
  isHydrated: false,
};

export const authslice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    adduser: (state, action) => {
      state.login = action.payload;
      state.isLoading = false;
      state.isAuthenticated = true;
    },

    removeuser: (state) => {
      state.login = null;
      state.isLoading = false;
      state.isAuthenticated = false;
      state.isHydrated = true;
    },

    reset: () => initialState,
  },

  extraReducers: (builder) => {
    const setUser = (state, action) => {
      state.login = action.payload;
      state.isLoading = false;
      state.isAuthenticated = true;
    };

    const clearUser = (state) => {
      state.login = null;
      state.isLoading = false;
      state.isAuthenticated = false;
    };

    builder
      // Login
      .addCase(loginapi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginapi.fulfilled, setUser)
      .addCase(loginapi.rejected, clearUser)

      // Register
      .addCase(registerapi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerapi.fulfilled, setUser)
      .addCase(registerapi.rejected, clearUser)

      // Check existing login session
      .addCase(hydratedapi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(hydratedapi.fulfilled, (state, action) => {
        setUser(state, action);
        state.isHydrated = true;
      })
      .addCase(hydratedapi.rejected, (state) => {
        clearUser(state);
        state.isHydrated = true;
      });
  },
});

export const { adduser, removeuser, reset } = authslice.actions;

export default authslice.reducer;
