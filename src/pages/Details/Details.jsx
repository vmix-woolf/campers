import { useParams } from 'react-router-dom'

function Details() {
    const { id } = useParams()
    return <h1>Details Page for camper ID: {id}</h1>
}

export default Details
