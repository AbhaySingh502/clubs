import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';

function Footer() {
    return (
        <div className='mt-3 footer-container'>
            <div className="container w-100">
                <footer className="py-5">
                    <div className="row">
                        <div className="col-6 col-md-2 mb-3">
                            <h5 className="footer-heading">Important Links</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <Link to="/" className="nav-link p-0">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item mb-2">
                                    <Link to="/Clubs" className="nav-link p-0">
                                        Clubs
                                    </Link>
                                </li>
                                <li className="nav-item mb-2">
                                    <Link to="/Gallery" className="nav-link p-0">
                                        Gallery
                                    </Link>
                                </li>
                                <li className="nav-item mb-2">
                                    <Link to="/Sports" className="nav-link p-0">
                                        Sports
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-2 mb-3">
                            <h5 className="footer-heading">Developer Profile</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <a href="https://github.com/AbhaySingh502" className="nav-link p-0">
                                        Abhay Singh
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="https://github.com/Katty020" className="nav-link p-0">
                                        Aryan Katiyar
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="https://www.instagram.com/pratayksh_10/" className="nav-link p-0">
                                        Pratayksh Mahajan
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="https://www.instagram.com/yash_bhajbhuje_/" className="nav-link p-0">
                                        Yash Bhajbhuje
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        {/* <p>© 2023 Company, Inc. All rights reserved.</p> */}
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Footer;
