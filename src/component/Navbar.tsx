import React from 'react'
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div className='menubar'>
            <div className='menu'>
                <li>
                    <a href="#">Score Board</a>
                </li>
                <li>
                    <a href="#">Vote</a>
                </li>
            </div>
        </div>
    )
}

export default Navbar
