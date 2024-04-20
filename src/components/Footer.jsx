import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer() {
    return (
        <div className='mt-3' style={{ backgroundColor: 'aliceblue', boxShadow: 'black 5px 5px 20px' }}>

            <div class="container w-100">
                <footer class="py-5">
                    <div class="row">
                        <div class="col-6 col-md-2 mb-3">
                            <h5 style={{ fontSize: "1.5rem", color: "blue" }}>Important Links</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Clubs</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Sports</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Gallery</a></li>
                            </ul>
                        </div>
                        <div class="col-6 col-md-2 mb-3">
                            <h5 style={{ fontSize: "1.5rem", color: "blue" }}>Developer profile</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Abhay Singh</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Aryan Katiyar</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pratayksh mahajan</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Yash Bhajbhuje</a></li>
                            </ul>
                        </div>


                    </div>

                    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        <p>© 2023 Company, Inc. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer