import React from 'react'
import "../css/club.css";
import '../css/team.css'
import Tilt from 'react-parallax-tilt'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
// import Indiviual_page from './Indiviual_page';
import { Link } from 'react-router-dom';

const Club = ({ key, name, para, insta_id, youtube, linkedin, image, club_link, high }) => {
    return (

        <div className='container-fluid d-flex align-items-center justify-content-center bg-light-blue'>

            <div className="club_up d-flex align-items-start w-70 mt-4">
                <Link className='club_lin box-shadow-darkslateblue cursor-pointer d-flexs' to={club_link} >
                    <Tilt style={{ display: "inline-block" }} tiltMaxAngleX={"7"} tiltMaxAngleY={"7"}>
                        <div className="team_card_img" style={{ height: high, width: "20rem" }}>
                            <span>
                                <img src={image} alt="" />
                            </span>
                        </div>

                    </Tilt>
                    <div className="club_details">

                        <Tilt style={{ display: "inline-block" }} tiltMaxAngleX={"3"} tiltMaxAngleY={"2"}>
                            <div className="club_name">
                                <div className="club_m">
                                    {name}
                                </div>
                                <div className="club_icons text-white w-80 ms-2 d-flex align-items-center justify-content-end me-4">
                                    <a className="
ml-4 d-flex justify-content-center" href={insta_id}><InstagramIcon sx={{ color: "#fff", fontSize: 30 }} /></a>
                                    <a className="
ml-4 d-flex justify-content-center" href={linkedin}><LinkedInIcon sx={{ color: "#fff", fontSize: 30 }} /></a>
                                    <a className="
ml-4 d-flex justify-content-center" href={youtube}><YouTubeIcon sx={{ color: "#fff", fontSize: 30 }} /></a>
                                </div>
                            </div>
                            <div className="club_about text-start p-4 bg-purple-400 text-white opacity-90 border border-white border-5">
                                <p class="fs-5 fw-bold">
                                    {para}
                                </p>
                            </div>
                        </Tilt>
                    </div>
                </Link>
            </div>
        </div>

    )
}

export default Club