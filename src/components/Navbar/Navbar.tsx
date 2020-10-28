import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

import './styles.css'

interface NavBarProps {
    nameContent: string,
    renderPlus?: boolean
}

const NavBar: React.FC<NavBarProps> = (props) => {
    const [pathName, setPathName] = useState('');
    useEffect(() => {
        setPathName(`${window.location.pathname}/register`);
    }, [])

    return (
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <Link className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" to="/news">SpaceX</Link>

            <button className="navbar-toggler d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-expanded="false" aria-controls="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="nameContent" >
                <h3 className="h3">{props.nameContent}</h3>
                {props.renderPlus ? (

                    <Link to={pathName}>
                        <FiPlus size={32} color="#FFF" />
                    </Link>
                ) : (
                        <div></div>
                    )
                }
            </div>
        </nav>
    )
}


export default NavBar;