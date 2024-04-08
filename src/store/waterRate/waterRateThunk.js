import { createAsyncThunk } from "@reduxjs/toolkit"
import { updateWaterRate } from "components/api/waterRate"

export const updateWaterRateThunk = createAsyncThunk(
    'waterRate/updateWaterRate', async (body, { rejectWithValue, getState }) => {
        try {
            return await updateWaterRate(body, getState().auth.token)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)