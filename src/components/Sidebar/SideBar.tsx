import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

 const SideBar = ()=> {
    const [pathName, setPathName] = useState('');
    useEffect(()=>{
        setPathName(window.location.pathname); 
    },[])

    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="sidebar-sticky pt-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link className={`nav-link ${pathName === '/news'?  'active': ''}`} to="/news">
                            <span data-feather="home"></span>
                            News
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${pathName === '/users'?  'active': ''}`} to="/users">
                            <span data-feather="file"></span>
                            Users
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default SideBar;