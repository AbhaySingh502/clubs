import { React } from 'react'
import Clubs_card from './Clubs_card'
import clubdata from '../data/clubdata.js'
import Header from '../components/Header'
import Footer from '../components/Footer'

import Tilt from 'react-parallax-tilt'
function Club() {
    return (
        <>
            <Header />
            <div className='club text-start mt-5'>
                <div className="container bs-docs-container">
                    <div className="row">
                        <div className="col-md-9">

                            <div className="bs-docs-section">
                                <h2 style={{ borderBottom: '0.4rem solid green', borderRadius: '5px' }}>Socail Clubs</h2>
                                <p className='fs-5 fw-lighter lh-base'>The social activities at IIT Jammu are coordinated by the social clubs and play a crucial role in fostering creativity and confidence among students. These events are directed towards developing balanced and well-rounded individuals. Over the years, the student body has come up with a plethora of events and competitions covering a vast spectrum of activities including  blood donation, yoga session, aksharshala and much more.</p>


                                {clubdata.slice(0, 3).map((item, index) => {
                                    return (
                                        <Clubs_card {...item} />
                                    )
                                })}


                            </div>
                            <div className="bs-docs-section">
                                <h2 style={{ borderBottom: '0.4rem solid green', borderRadius: '5px' }}>Cultural Clubs</h2>
                                <p className='fs-5 fw-lighter lh-base'>The cultural activities at IIT Jammu are coordinated by the Cultural Council and play a crucial role in fostering creativity and confidence among students. These events are directed towards developing balanced and well-rounded individuals. Over the years, the student body has come up with a plethora of events and competitions covering a vast spectrum of activities including  drama, photography, art expo and much more.</p>


                                {clubdata.slice(4, 10).map((item, index) => {
                                    return (
                                        <Clubs_card {...item} />
                                    )
                                })}


                            </div>
                            <div className="bs-docs-section">
                                <h2 style={{ borderBottom: '0.4rem solid green', borderRadius: '5px' }}>Technical Clubs</h2>
                                <p>
                                    Technology has revolutionized the world and holds the key to our future. Being a new IIT, there is a need and room for technical developments, which would help the institute to achieve greater heights.  IIT Jammu holds technical activities at regular intervals, co-ordinated by the various clubs.
                                </p>

                                {clubdata.slice(10,).map((item, index) => {
                                    return (
                                        <Clubs_card {...item} />
                                    )
                                })}
                            </div>


                        </div>

                    </div>

                    <div className="messa mb-5">

                        <div className="upcoming_event d-flex justify-content-center " >
                            <div class="card mb-3 h-auto" style={{ width: "80%", boxShadow: 'black 5px 5px 20px' }}>
                                <div class="row g-0 mb-0">
                                    <div class="col-md-8 text-start">
                                        <div class="card-body">
                                            <h5 class="card-title" style={{ fontSize: "1.8rem" }}>Pratayksh Mahajan</h5>
                                            <p class="card-text" style={{ fontSize: "1.2rem" }}>Hey everyone,

                                                Welcome to the vibrant student life at IIT Jammu! Get ready for an incredible journey filled with academic excellence, unforgettable experiences, and lifelong friendships.
                                                Remember, we're here to support you every step of the way. Get ready to make memories that'll last a lifetime!
                                                Pratayksh Mahajan
                                            </p>
                                            <p class="card-text text-primary" style={{ fontSize: "1.35rem" }}>Student General Secretary, IIT </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Club