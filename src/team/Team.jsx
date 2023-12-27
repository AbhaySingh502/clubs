import React from 'react'
import TeamCard from "./TeamCard"
import Team_memberCard from "./Team_memberCard"
import team_data from "../data/team_data"
import Tilt from 'react-parallax-tilt'

import '../css/team.css'
function Team() {
  return (
    <div className='team'>
        <div style={{
        marginTop: "4rem",
        display:"flex",
        justifyContent:"center",
        textAlign:"center",
        overflowWrap:"break-word"
        }}>
        {team_data.slice(0,1).map((item, index) => {
        return (
            <Tilt style={{display:"inline-block"}} tiltMaxAngleX={"7"} tiltMaxAngleY={"7"}>
                <TeamCard {...item} />
            </Tilt>
        )
        })}
        </div>

        <div className="team_mem">
        {team_data.slice(1,3).map((item, index) => {
        return (
                <Team_memberCard {...item} />
        )
        })}
        </div>
    </div>
  )
}

export default Team