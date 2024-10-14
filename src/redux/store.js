import {configureStore} from '@reduxjs/toolkit'
import postSlice from './postSlice'
import dialogSlice from './dialogSlice'

export default configureStore({
    reducer: {
        posts: postSlice,
        dialogs: dialogSlice,
    }
})
