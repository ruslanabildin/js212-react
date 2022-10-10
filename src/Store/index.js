import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {

}

const SomeSlice = createSlice({
    name:' ',
    initialState,
    reducers:{

    }
})

export const {SomeReducer} = SomeSlice.actions
export const store = configureStore({
    reducer:{

    }
})