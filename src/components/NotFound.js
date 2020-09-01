import React from 'react'
import {Link} from "react-router-dom"

export default function NotFound() {
    return (
        <div className="notFound">
            <h1>Page not found</h1>
            <img src="anb" alt="page not found" width="350"/>
            <br/><br/>
            <div><Link className="btn" to="/">Go to HomePage</Link></div>
            
        </div>
    )
}
