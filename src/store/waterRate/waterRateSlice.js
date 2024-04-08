import { createSlice } from '@reduxjs/toolkit'
import { updateWaterRateThunk } from './waterRateThunk'

const initialState = {
    waterRate: 2000
}

const waterRateSlice = createSlice({
    name: 'waterRate',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(updateWaterRateThunk.fulfilled, (state, { payload }) => {
                console.log('payload', payload)
            })
    } 
})

export const waterRateReducer = waterRateSlice.reducer
export const { waterRate } = waterRateSlice.actions