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
            <div className="team_card">
                <div className="team_card_main">
                    <div className="team_card_img">
                        <span>
                            <img src={source_url} alt="" />
                        </span>
                    </div>
                    <div className="team_card_text">
                        <div className="team_card_up">
                            <p>{type}</p>
                            <div className="card_icons">
                                <a href={insta_id}><InstagramIcon/></a>
                                <a href={linkedin}><LinkedInIcon/></a>
                                <a href={email}><AlternateEmailIcon/></a>
                            </div>
                        </div>
                        <p>{name}</p>
                    </div>
                </div>
            </div>
        </Tilt>
        </div>
    )
}