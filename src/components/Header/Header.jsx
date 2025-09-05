import { Link } from 'react-router-dom'

function Header() {
    return (
        <header style={{ padding: '10px', background: '#f7f7f7' }}>
            <nav style={{ display: 'flex', gap: '20px' }}>
                <Link to="/">Home</Link>
                <Link to="/catalog">Catalog</Link>
            </nav>
        </header>
    )
}

export default Header
