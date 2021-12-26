import { Link } from "react-router-dom"

const NotFound = ()=>{
    return(
        <>
        <p>404 Not Found :(</p>
        <Link to={'/'}>Back to home</Link>
        </>
    )
}

export default NotFound