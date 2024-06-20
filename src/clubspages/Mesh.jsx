import React from 'react'
import '../css/Indiviual.css'
import '../css/team.css'
import Header from "../components/Header.jsx"
import Tilt from 'react-parallax-tilt'
import Individual_page_bottom from '../clubs/Individual_page_bottom.jsx'
import mesh_data from '../data/mesh_data.js'
const Red = {
    color: "#C21717",
};
const Blue = {
    color: "#003f87",
};

const imageData = [
    './assetes/mesh1.png',
    './assetes/mesh2.png',
    './assetes/mesh3.png',
    './assetes/mesh4.png',
    './assetes/mesh5.png',
    './assetes/mesh6.png',
    './assetes/mesh7.png',
    './assetes/mesh8.png',
    './assetes/mesh9.png',
    './assetes/mesh10.png',
    // Add more image paths as needed
];
function Mesh() {
    return (
        <div className='clubpages' style={{ height: "100vh" }} >
            <Header />
            <div className="clubpages_title mt-5">
                <h1 style={{ borderBottom: '0.3rem solid green', borderRadius: '5px' }}>MESH</h1>
            </div>

            <div className="clubpages_main d-flex">
                <div className='clubpages_left'>
                    <div className="clubpages_up d-flex mt-2 me-5 ms-5">
                        <div className="clubpages_text">

                            <Tilt style={{ display: "inline-block" }} tiltMaxAngleX={"3"} tiltMaxAngleY={"2"}>
                                <div className="clubpages_about fs-6" style={{ textAlign: "left", color: "black", fontWeight: "600" }}>
                                    <p>
                                        Interdisciplinary Thinking is an attempt to re-think the boundaries between engineering, medicine, basic sciences, humanities and in general all aspects of human knowledge.
                                        While pioneers in any field usually have a broad understanding of many things, people who follow become “experts” by narrow training in specific skills and techniques. In the last hundred years we have seen a growing separation of specialists into knowledge silos – engineers, doctors, chemists, bankers, etc.
                                        Started as an informal group for integrating or meshing the disciplines to meet weekly on campus. The group was then tentatively called “MESH of Engineering, Science and the Humanities” (MESH for short).

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

                                    {mesh_data.map((item, index) => {
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

export default Mesh