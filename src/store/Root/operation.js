
export const handlerPending = state => {
    state.isLoading = true 
    state.error = ''    
}

export const handlerFulfilled = state => {
    state.isLoading = false
}

export const handlerRejected = (state, { payload, error }) => {
    state.isLoading = false
    state.error = payload?.error || payload || error?.message || "Some error"
}