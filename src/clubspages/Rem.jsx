import React from 'react'
import '../css/Indiviual.css'
import '../css/team.css'
import Header from "../components/Header.jsx"
import Tilt from 'react-parallax-tilt'
import Individual_page_bottom from '../clubs/Individual_page_bottom.jsx'
import rem_data from '../data/rem_data.js'
const Red = {
    color: "#C21717",
};
const Blue = {
    color: "#003f87",
};

const imageData = [
    './assetes/rem1.jpg',
    './assetes/rem2.jpg',
    './assetes/rem3.jpg',
    './assetes/rem4.jpg',
    './assetes/rem5.jpg',
    './assetes/rem6.jpg',
    './assetes/rem7.jpg',
    // Add more image paths as needed
];
function Rem() {
    return (
        <div className='clubpages' style={{ height: "100vh" }} >
            <Header />
            <div className="clubpages_title mt-5">
                <h1 style={{ borderBottom: '0.3rem solid green', borderRadius: '5px' }}>REM</h1>
            </div>

            <div className="clubpages_main d-flex">
                <div className='clubpages_left'>
                    <div className="clubpages_up d-flex mt-2 me-5 ms-5">
                        <div className="clubpages_text">

                            <Tilt style={{ display: "inline-block" }} tiltMaxAngleX={"3"} tiltMaxAngleY={"2"}>
                                <div className="clubpages_about fs-6" style={{ textAlign: "left", color: "black", fontWeight: "600" }}>
                                    <p>
                                        Research for Minds (Re4M) at IIT Jammu is more than a club; it’s a vibrant tapestry of interdisciplinary dialogue and innovation. Re4M (pronounced 'Reform') stands as a beacon for research enthusiasts within and beyond our institute, bridging gaps and building networks across diverse fields. From BTech undergraduates to seasoned PhD scholars and faculty members, Re4M nurtures a thriving community of inquisitive minds.

                                        Our journey began on October 4, 2021, with our inaugural research talk—a humble start that ignited an unstoppable wave of intellectual exploration. Conceived by the visionary minds of Prof. Uma Shankar and Dr. Rajkumar, Re4M was born from a collective passion for critical scholarship and innovative thinking. Supported by like-minded scholars such as Prof. Suresh Devasahayam, Dr. Sayantan Mandal, Inayat Irshad, Khogesh Rathore, Amina Girdher, and Sheriya Sareen, Re4M took root as a part of the Interdisciplinary Center for Deployable Solutions (IDeS), headed by Prof. Uma Shankar.

                                        Our official launch on National Science Day, February 28, 2022, marked the beginning of a new era. The name and logo, a testament to the creativity of Dr. Sayantan Mandal, symbolize our commitment to fostering a culture of research excellence. Under the leadership of Sheriya Sareen, our first student convenor (from January 2022 to December 2023), and a dedicated team of its founding members, Re4M began to flourish.

                                        By August 2023, Re4M had evolved into an official club at IIT Jammu, with Dr. Mithu Baidya as the first designated faculty in charge. The core team expanded, bringing in fresh perspectives and boundless enthusiasm with members like Mohit Teacher, our new convenor, and committed contributors such as Jairam Raigar, Anna Anandita, and Anand Sankar.

                                        At Re4M, we aspire to:

                                        Foster innovation and engagement

                                        Promote critical scholarship

                                        Encourage interdisciplinary dialogue

                                        Communicate research in accessible ways

                                        Enhance communication skills

                                        Expand the scope for collaboration

                                        Join us at Re4M, where every week, we delve into the depths of research, share our discoveries, and inspire each other to think beyond boundaries. Together, we’re not just creating knowledge—we’re shaping the future.
                                    </p>
                                </div>
                            </Tilt>
                        </div>
                    </div>

                    <div className="d-flex">
                        <div className="clubpages_down mb-2" style={{ width: "70%" }}>

                            <div className="clubpages_down_heading">
                                <h4>
                                    <span style={Red}>EVENTS</span>
                                    <span> &</span>
                                    <span style={Blue}> COMPETITIONS</span>
                                </h4>
                            </div>

                            <div className="clubpages_down_details">
                                <div >

                                    {rem_data.map((item, index) => {
                                        return (
                                            <Individual_page_bottom {...item} />
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <span className="vl border-start border-2 border-primary opacity-60"></span>
                        <div className='clubpages_right w-30'>
                            <div className="clubpages_right_title mb-4">
                                <h4>
                                    <span className='fs-2' style={Red}>CLUB</span>
                                    {/* <span> AND</span> */}
                                    <span className='fs-2' style={Blue}> MOMENTS</span>
                                </h4>
                            </div>
                            <div className="gallery">
                                {imageData.map((item, index) => {
                                    return (
                                        <div className="pics" key={index}>
                                            <img src={item} style={{ width: "100%" }} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Rem