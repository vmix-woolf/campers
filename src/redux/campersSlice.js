import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../services/api'

export const fetchCampers = createAsyncThunk(
    'campers/fetchCampers',
    async (_, thunkAPI) => {
        try {
            const response = await api.get('/campers')
            console.log('API data:', response.data) // 👈 лог
            return response.data
        } catch (error) {
            console.error('API error:', error) // 👈 лог
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

const campersSlice = createSlice({
    name: 'campers',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCampers.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(fetchCampers.fulfilled, (state, action) => {
                state.isLoading = false
                state.items = action.payload.items || []
            })
            .addCase(fetchCampers.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export default campersSlice.reducer
