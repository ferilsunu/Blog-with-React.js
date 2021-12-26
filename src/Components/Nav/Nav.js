import react from "react";
import reactDOM from "react-dom";
import './nav.css'
import {Link} from 'react-router-dom'

const Nav = ()=>{
    return(
        <div className="nav">
            <div className="logo"><p>ReactBlog</p></div>
            <div className="links">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/create">Create</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav