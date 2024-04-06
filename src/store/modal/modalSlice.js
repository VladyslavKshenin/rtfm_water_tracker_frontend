import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        logOutModal: false,
        dailyNormaModal: false,
    },
    reducers: {
        logOutModal: (state) => {
            state.logOutModal= !state.logOutModal
        },
        dailyNormaModal: (state) => {
            state.dailyNormaModal= !state.dailyNormaModal
        }
    }
})

export const showModalReducer = modalSlice.reducer
export const { logOutModal, dailyNormaModal } = modalSlice.actions
