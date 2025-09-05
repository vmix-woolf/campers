import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Catalog from './pages/Catalog/Catalog'
import Details from './pages/Details/Details'

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/catalog/:id" element={<Details />} />
            </Routes>
        </>
    )
}

export default App

