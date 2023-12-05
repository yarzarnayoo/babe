import './ShweShwe.css';
import { useState,useEffect } from "react";
import axios from 'axios';

const ShweShwe = ({ title,image }) => {
    return (
        <div className="">
            {/* header */}
            <div className="shwe-banner img-responsive">
                <div className='row shwe-banner-nav'>
                    <div className='col-6'>
                        <h2 className='d-flex justify-content-center shwe-logo-text'>SSME's
                            <span className='shwe-logo-text-two'>Design</span>
                        </h2>
                    </div>

                    <div className='col-6'>
                        <ul className='list-inline nav-list'>
                            <li className='list-inline-item nav-list-item'>Resume</li>
                            <li className='list-inline-item nav-list-item'>About</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='container mt-20'>
                <h1 className='d-flex justify-content-center shwe-title'>Portfolio</h1>

                {title && image && title.map((t, index) => (
                <div className='card shwe-card mt-20' key={t}>
                    <div className='card-title mt-10'>
                    <h2 className='d-flex justify-content-center shwe-card-title'>
                        {t}
                    </h2>
                    </div>
                    <div className='card-body' key={index}>
                    <img src={image[index]} className='shwe-portfolio-image img-responsive' />
                    </div>
                </div>
                ))}

            </div>

            <div className='shwe-footer d-flex justify-content-center align-self-center'>
                <div className='d-flex justify-content-center align-self-center shwe-footer-text'>contact - 
                    <a href="tel:+959799220105" className='shwe-phone'>
                        &nbsp;09799220105
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ShweShwe;