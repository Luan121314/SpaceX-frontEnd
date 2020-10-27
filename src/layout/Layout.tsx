import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import SideBar from '../components/Sidebar/SideBar';

interface LayoutProps{
    nameContent: string
}

const Layout: React.FC<LayoutProps> = (props) => {
    return (
        <>
            <Navbar nameContent={props.nameContent} />
            <div className="container-fluid">
                <div className="row content">
                <SideBar/>
                {props.children}
                </div>
            </div>
        </>
    )
}

export default Layout;