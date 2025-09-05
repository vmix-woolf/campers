import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../services/api'

export const fetchCamperById = createAsyncThunk(
    'camperDetails/fetchCamperById',
    async (id, thunkAPI) => {
        try {
            const response = await api.get(`/campers/${id}`)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

const camperDetailsSlice = createSlice({
    name: 'camperDetails',
    initialState: {
        item: null,
        isLoading: false,
        error: null,
    },
    reducers: {
        clearDetails: (state) => {
            state.item = null
            state.isLoading = false
            state.error = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCamperById.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(fetchCamperById.fulfilled, (state, action) => {
                state.isLoading = false
                state.item = action.payload
            })
            .addCase(fetchCamperById.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { clearDetails } = camperDetailsSlice.actions
export default camperDetailsSlice.reducer
