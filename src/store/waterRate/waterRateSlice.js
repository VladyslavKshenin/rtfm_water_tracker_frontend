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
                state.waterRate = payload[0].waterRate
            })
    } 
})

export const waterRateReducer = waterRateSlice.reducer
export const { waterRate } = waterRateSlice.actions