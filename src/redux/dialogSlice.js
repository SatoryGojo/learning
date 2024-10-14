import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    messages: [
        {message: 'Hey'},
        {message: 'Bro'},
        {message: 'Hello'},
    ],

    names: [
        {id: 1, name:'Настя'},
        {id: 2, name:'Паша'},
        {id: 3, name:'Дима'},
        
    ],
}

const dialogSlice = createSlice({
    name: 'Dialogs',
    initialState,
    reducers: {
        addMessage: (state, action) => {
            state.messages.push({
                message: action.payload.message
            })
        }
    }
})

export const {addMessage,} = dialogSlice.actions
export default dialogSlice.reducer