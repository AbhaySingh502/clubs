import React from 'react'
import "../css/team.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Tilt from 'react-parallax-tilt'
// import { motion } from 'framer-motion'


export default function Team({key, name, type, contact_no, email, insta_id, linkedin, source_url}) {
    return(
        <div>

    <Tilt style={{display:"inline-block",width:"85%"}} tiltMaxAngleX={"7"} tiltMaxAngleY={"7"}>    
            <div className="team_card ">
                <div className="team_card_main border rounded p-1 d-grid">
                    <div className="team_card_img position-relative d-inline-block w-8 h-8 overflow-hidden">
                        <span>
                            <img src={source_url} alt="" />
                        </span>
                    </div>
                    <div className="team_card_text px-4 d-flex flex-column justify-content-center overflow-hidden">
                        <div className="team_card_up d-flex justify-content-between align-items-end">
                            <p className='bg-gradient-text text-white fs-6 lh-1'>{type}</p>
                            <div className="card_icons d-flex">
                                <a href={insta_id}><InstagramIcon/></a>
                                <a href={linkedin}><LinkedInIcon/></a>
                                <a href={email}><AlternateEmailIcon/></a>
                            </div>
                        </div>
                        <p className='fs-4 lh-1.5 text-left fw-bold text-white'>{name}</p>
                    </div>
                </div>
            </div>
        </Tilt>
        </div>
    )
}