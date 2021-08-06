import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <div>
            <div className="container">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <Link to={'/login'} href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <span className="fs-4">JSON File Uploader</span>
                </Link>

                <ul className="nav nav-pills">
                    <li className="nav-item"><Link to={'login'} className="nav-link active" aria-current="page">Login</Link></li>
                   <li className="nav-item"><Link to={'signup'} className="nav-link">SignUp</Link></li>
                </ul>
                </header>
            </div>
        </div>
    )
}

export default Navbar
