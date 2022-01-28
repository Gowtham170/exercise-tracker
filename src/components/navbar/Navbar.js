import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className = "my-2 navbar navbar-dark  navbar-expand-lg mx-auto">
           <div className='container-lg bg-dark' style={{width:'840px'}}>
           <Link to = "/" className = "navbar-brand">
                <span className='fw-bold text-light'>Exercise Tracker</span>
           </Link>
           <button  className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#main-nav'
                    aria-controls='main-nav'
                    aria-label='Toggle navigation'
                    aria-expanded='false'>
               <span className='navbar-toggler-icon'></span>
           </button>
            
            <div id='main-nav' className = "collapse navbar-collapse justify-content-end align-items-center">
                <ul className = "navbar-nav">
                    <li className = "navbar-item">
                        <Link to = "/" className = "nav-link"> Exercise </Link>
                    </li>
                    <li className = "navbar-item">
                        <Link to = "/user" className = "nav-link"> Create User </Link>
                    </li>
                    <li className = "navbar-item">
                        <Link to = "/create" className = "nav-link"> Create Exercise Log</Link>
                    </li>
                </ul>
            </div>
           </div>
        </nav>
    )
}
