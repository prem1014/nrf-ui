import React from 'react';

import './Home.component.css';
import help1 from '../../../assets/help1.jpg';
import help2 from '../../../assets/help2.jpg';
import help3 from '../../../assets/help3.jpg';
import help4 from '../../../assets/help4.jpg';

const Home = () => {
    return (
        <div className="row">
            <div className="col-12 nrf-home">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="section-tittle text-center mb-80">
                            <span>What we are doing</span>
                            <h2>We Are In A Mission To Help The Helpless</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="single-cat text-center mb-50">
                            <div className="cat-icon">
                                <span className="flaticon-null-1"></span>
                            </div>
                            <div className="cat-cap">
                                <h5><a href="#">Flood Relief</a></h5>
                                <p>
                                    More than a million people have been affected by severe flooding in Northern Bihar. The most affected areas are
                                    Gopalganj, Betia, Motihari, Sitamarhi, Darbhanga, Madhubani, and many more from the Nothern part of Bihar.
                                    We are continuously helping flood affected people in the form of food, water and medicine.
                                </p>
                                <div className="row img-container">
                                    <div className="col-lg-3 col-md-3 col-12">
                                        <img src={help1} />
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-12">
                                        <img src={help2} />
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-12">
                                        <img src={help3} />
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-12">
                                        <img src={help4} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-10">
                            <div className="about-caption mb-50">
                                <div className="section-tittle mb-35">
                                    <span>About our foundetion</span>
                                    <h2>We Are In A Mission To Help Helpless</h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,mod tempor incididunt ut labore et dolore magna aliqua. Utnixm, quis nostrud exercitation ullamc.</p>
                                <p>Lorem ipvsum dolor sit amext, consectetur adipisicing elit, smod tempor incididunt ut labore et dolore.</p>
                            </div>
                            <a href="about.html" className="btn">About US</a>
                        </div>
                        <div className="col-lg-6 col-md-12 about-img">
                            <img src={help3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;