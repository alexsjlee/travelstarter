import React from 'react';
import { Link } from 'react-router-dom'
import Logo from './imgs/travelstarter_logo.png';

const SideNav = (props) => {
    return (
        <div className={props.className}>
            <img className="img-fluid sideNav-img"src={Logo} alt="Logo"/>
            <hr />
            {/*<img src={WorldImg} className="img-fluid sideNav-img" alt="Responsive image"/>*/}
            <div className="container sideNav-links">
            <Link to="/">Home</Link>
            <Link to="#">Destinations</Link>
            <Link to="#">Blog</Link>
            <Link to="#">About</Link>
            </div>
        </div>
    )
}

export default SideNav;