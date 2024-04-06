import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        logOutModal: false,
        dailyNormaModal: false,
        settingModal: false,
        waterModal: false,
        deleteWaterModal: false,
    },
    reducers: {
        logOutModal: (state) => {
            state.logOutModal= !state.logOutModal
        },
        dailyNormaModal: (state) => {
            state.dailyNormaModal= !state.dailyNormaModal
        },
        settingModal: (state) => {
            state.settingModal = !state.settingModal
        },
        waterModal: (state) => {
            state.waterModal = !state.waterModal 
        },
        deleteWaterModal: (state) => {
            state.deleteWaterModal = !state.deleteWaterModal
        }
    }
})

export const showModalReducer = modalSlice.reducer
export const { logOutModal, dailyNormaModal, settingModal, waterModal, deleteWaterModal} = modalSlice.actions
