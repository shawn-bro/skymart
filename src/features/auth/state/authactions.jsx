import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/config";
import { toast } from "react-toastify";


export const loginapi = createAsyncThunk("auth/login",
   async (credentials,thunkapi)=>{
        try {
            let res = await api.post("auth/login",credentials);
            console.log(res);
            return res.data.data
            
        } catch (error) {
            toast.error("entered invaild credentials")
            return thunkapi.rejectWithValue(error)
        }
    }
)

export const registerapi = createAsyncThunk("auth/register",
    async(credentials,thunkapi)=>{
        try {
            let res = await api.post("auth/register",credentials);
            console.log(res);
            return res.data.data
            
        } catch (error) {
             toast.error("entered invaild credentials")
            return thunkapi.rejectWithValue(error)
        }
    }
)

export const hydratedapi = createAsyncThunk("auth/me",
    async(_,thunapi)=>{
        try {
            let res = await api.get("auth/me");
            return res.data.user
        } catch (error) {
            return thunapi.rejectWithValue(
                error.response?.data || error.message
            );
        }
    }
)

