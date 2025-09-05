import { createSlice } from '@reduxjs/toolkit'

const loadFavorites = () => {
    try {
        const data = localStorage.getItem('favorites')
        return data ? JSON.parse(data) : []
    } catch {
        return []
    }
}

const saveFavorites = (favorites) => {
    try {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    } catch {
        // игнорируем ошибки localStorage
    }
}

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        items: loadFavorites(),
    },
    reducers: {
        toggleFavorite: (state, action) => {
            const id = action.payload
            if (state.items.includes(id)) {
                state.items = state.items.filter(item => item !== id)
            } else {
                state.items.push(id)
            }
            saveFavorites(state.items)
        },
    },
})

export const { toggleFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer
