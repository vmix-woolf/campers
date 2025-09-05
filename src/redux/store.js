import { configureStore } from '@reduxjs/toolkit'
import campersReducer from './campersSlice'
import filtersReducer from './filtersSlice'
import favoritesReducer from './favoritesSlice'
import camperDetailsReducer from './camperDetailsSlice'

const store = configureStore({
    reducer: {
        campers: campersReducer,
        filters: filtersReducer,
        favorites: favoritesReducer,
        camperDetails: camperDetailsReducer,
    },
})

export default store
