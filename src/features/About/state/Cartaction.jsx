import { createAsyncThunk } from "@reduxjs/toolkit";
import { api1 } from "../../../config/config";

export const Cartactions = createAsyncThunk("cart/add",
    async(Credential,thunkapi)=>{
        try {
            const response = await api1.post("/carts/add", {
              userId: 1,
              products: Credential.map((item) => ({
                id: item.id,
                quantity: item.quantity ?? 1,
              })),
            });
        console.log(response.data);
        
            return response.data;
            
          } catch (error) {
            return thunkapi.rejectWithValue(
                error.response?.data ?? error.message
            )
          }
    }
)