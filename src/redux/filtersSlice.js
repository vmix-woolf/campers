import { createSlice } from '@reduxjs/toolkit'

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        location: '',
        form: '',         // тип кузова (radio)
        equipment: [],    // список строк: ['AC', 'kitchen', ...]
    },
    reducers: {
        setLocation: (state, action) => {
            state.location = action.payload
        },
        setForm: (state, action) => {
            state.form = action.payload
        },
        toggleEquipment: (state, action) => {
            const eq = action.payload
            if (state.equipment.includes(eq)) {
                state.equipment = state.equipment.filter(item => item !== eq)
            } else {
                state.equipment.push(eq)
            }
        },
        resetFilters: (state) => {
            state.location = ''
            state.form = ''
            state.equipment = []
        }
    },
})

export const { setLocation, setForm, toggleEquipment, resetFilters } = filtersSlice.actions
export default filtersSlice.reducer
