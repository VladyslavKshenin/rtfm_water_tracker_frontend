import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        showModal: false
    },
    reducers: {
        showModal: (state) => {
            state.showModal= !state.showModal
        }
    }
})

export const showModalReducer = modalSlice.reducer
export const { showModal } = modalSlice.actions
