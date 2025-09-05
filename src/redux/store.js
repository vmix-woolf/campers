import { configureStore } from '@reduxjs/toolkit'
import campersReducer from './campersSlice'
import filtersReducer from './filtersSlice'

const store = configureStore({
    reducer: {
        campers: campersReducer,
        filters: filtersReducer,
    },
})

export default store
