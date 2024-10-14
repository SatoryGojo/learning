import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    posts: [
        {title: 'Title', message: 'First Post'},
        {title: 'Title', message: 'Second Post'},
        
    ]
}

const postSlice = createSlice({

    name: 'Posts',
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts.push({
                title: 'New Title',
                message: action.payload.post
            })
        }
    }
})

export const {addPost,} = postSlice.actions
export default postSlice.reducer