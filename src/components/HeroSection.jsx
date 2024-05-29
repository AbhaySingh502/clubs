import React from 'react';
import '../css/HeroSection.css';

const HeroSection = () => {
    return (
        <div className="hero-container">
            <img src="./assetes/rajat.jpg" alt="Hero Background" className="hero-image" />
            <div className="hero-overlay">
                <div className="hero-content">
                    <div className="hero-icons">
                        <div className="hero-icon">
                            <img src="./assetes/sport.png" alt="Choose Your Sport" />
                            <p>CHOOSE YOUR SPORT</p>
                        </div>
                        <div className="hero-icon">
                            <img src="./assetes/coach.png" alt="Train by Professional" />
                            <p>TRAIN BY PROFESSIONAL</p>
                        </div>
                        <div className="hero-icon">
                            <img src="./assetes/medal.png" alt="Become a Pro" />
                            <p>BECOME A PRO</p>
                        </div>
                    </div>
                    <h1>Unleash your potential and build lifelong skills by engaging in sports</h1>
                    <p>Where every challenge is an opportunity for growth. Embrace the spirit of teamwork, discipline, and resilience that will shape your future success.</p>
                    <div className="hero-buttons">
                        <a href="https://www.instagram.com/sports.iitjammu/" style={{ textDecoration: 'none' }}><button className="btn join-us">JOIN US</button> </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
