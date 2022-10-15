import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
 posts: []
}
export const fetchPosts = createAsyncThunk('weather/fetchweather',async ()=>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json();
    return data
})
const PostsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        fetchPost: ()=>{}
        },
        extraReducers: (builder) => {
            builder.addCase(fetchPosts.fulfilled,(state,action)=>{
                state.posts = action.payload
            })
        }
    }
)

export const {fetchPost} = PostsSlice.actions
export const store = configureStore({
    reducer: {
           posts: PostsSlice.reducer
    }
})