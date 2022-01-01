import React from 'react';
import "./Banner.css"

const Banner = () => {
    return (
        <section id="banner ">
            <div className="banner-container container d-flex justify-content-center align-items-center">
                <div className="banner-contents text-center">
                    <h1 style={{ color: "white" }} className="font-weight-bolder mb-5 ">Life is like a bike ride; it all depends on the way you ride !!!</h1>
                    <button style={{ color: "#3A4256" }} className="btn btn-lg btn-primary mx-3"><i className="fas fa-play me-2"></i> Sign in</button>
                    <button style={{ color: "#3A4256" }} className="btn btn-lg btn-primary mx-3"><i className="fas fa-sign me-2"></i> Sign up</button>
                </div>
            </div>
        </section>
    );
};

export default Banner;