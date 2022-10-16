import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
 posts: []
}
export const fetchPosts = createAsyncThunk('posts/fetchPosts',async (page)=>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json();
    let newArr = []
      for(let i=page[0];i<page[1];i++){
        newArr.push(data[i])
      }
    return newArr
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