import React from 'react';

import './Header.component.css';

import logo from '../../../../assets/logo.png';

const AppHeader = () => {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-md navbar-dark nrf-nav fixed-top">
                        <img src={logo} />
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact us</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default AppHeader;