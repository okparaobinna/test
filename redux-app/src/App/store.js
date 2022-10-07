import {configureStore} from '@reduxjs/toolkit'
import createSlice from '../feature/createSlice'


 const store = configureStore({

reducer:{

    counterReducer:createSlice
}
    
})

export default store
