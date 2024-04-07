import { createSlice } from '@reduxjs/toolkit';
import { handlerFulfilled, handlerPending, handlerRejected} from './operation';

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        isLoading: false, 
        error: '',
    },
    extraReducers: (builder) => {
        builder
            .addMatcher((action) => action.type.endsWith('/pending'), handlerPending)
            .addMatcher((action) => action.type.endsWith('/fulfilled'), handlerFulfilled)
            .addMatcher((action) => action.type.endsWith('/rejected'), handlerRejected)      
    }
})

export const rootReducer = rootSlice.reducer