import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../services/api'

export const fetchCampers = createAsyncThunk(
    'campers/fetchCampers',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState()
        const { location, form, equipment } = state.filters

        let query = []
        if (location) query.push(`location=${encodeURIComponent(location)}`)
        if (form) query.push(`form=${encodeURIComponent(form)}`)
        equipment.forEach(eq => query.push(`${eq}=true`))

        const queryString = query.length ? `?${query.join('&')}` : ''
        try {
            const response = await api.get(`/campers${queryString}`)
            return response.data
        } catch (error) {
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
