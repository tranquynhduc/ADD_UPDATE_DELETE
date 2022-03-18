import React from 'react';
import { Link } from 'react-router-dom'
import {FaUserCircle} from 'react-icons/fa'
import { useState } from 'react';

const Header = () => {
 const [show,setShow] =useState(false);
 const handleClick = () =>{
     setShow(!show)
 }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div onClick={handleClick} className="container-fluid">
                <Link className="navbar-brand"to ='/'><FaUserCircle/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse"   id="navbarColor02">
                    <ul className="navbar-nav me-auto" >
                        <li className="nav-item">
                            <Link className="nav-link active"to ='/'> React Redux Contact Book
                                <span className="visually-hidden">(current)</span>
                            </Link>
                        </li>
                      
                    </ul>
                 
                </div>
            </div>
        </nav>
    )
}

export default Header