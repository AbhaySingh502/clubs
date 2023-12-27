import React from 'react'
import '../css/Indiviual.css'
// import robotic from './robotic.jpg'
// import robo1 from './robo1.jpg'
// import robo2 from './robo2.jpg'
import Header from "../Header.jsx"
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Tilt from 'react-parallax-tilt'
import Team from '../team/Team.jsx'
import Crousel from '../Crousel.jsx'
const Red = {
  color: "#C21717",
};
const Blue = {
  color: "#003f87",
};
// const while_hover = {
//   paddingLeft:"20px",
//   transition:{duration:0.2}
// }
function Indiviual_page() {
  return (
    <div className='clubpages' style={{height: "100vh" }} >
      <Header/>
      <div className="clubpages_title">
        <h1>ROBOTICS</h1>
      </div>
      <hr className="round" />
      <div className="clubpages_main">

      <div className='clubpages_left'>
        <div className="clubpages_up">
          <img src={robotic} alt="" />  
          <div className="clubpages_text">
            <div className="club_icons">
              <a href="{insta_id}"><InstagramIcon sx={{ color: "#0d6efd", fontSize: 30 }}/></a>
              <a href="{linkedin}"><LinkedInIcon sx={{ color: "#0d6efd", fontSize: 30 }}/></a>
              <a href="{youtube}"><YouTubeIcon sx={{ color: "#0d6efd", fontSize: 30 }}/></a>
              
            </div>
            <Tilt style={{display:"inline-block"}} tiltMaxAngleX={"3"} tiltMaxAngleY={"2"}>
            <div className="clubpages_about" style={{textAlign:"left",color: "black",fontSize:"20px",fontWeight:"600"}}>
              <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestias tenetur dolorum distinctio maxime ab atque officiis quos repellat minima porro cumque eveniet esse vitae ad aut culpa maiores deleniti, corrupti incidunt fuga vel, enim nobis obcaecati. Exercitationem, consequatur voluptate labore quaerat error repellendus iusto iure odio voluptatibus nulla voluptatum, dolore laudantium modi necessitatibus at facere praesentium, eligendi sequi odit ut pariatur et explicabo beatae? Dolores, modi deserunt. Vitae optio impedit ducimus dolorum maxime commodi consequatur, sint aspernatur odio quia maiores nisi explicabo quas officiis? Rem, tempore iste ex minus explicabo omnis recusandae similique cum est, adipisci nesciunt accusamus distinctio?
              </p>
            </div>
            </Tilt>
          </div>
        </div>
          <hr className="round" />
        <div className="clubpages_down">

          <div className="clubpages_down_heading">
            <h4>
              <span style={Red}>EVENTS</span>
              <span> &</span>
              <span style={Blue}> COMPETATION</span>
            </h4>
          </div>
          
          <div className="clubpages_down_details">
            <div className="clubpages_crousel">
              <h4>Important events</h4>
              <Crousel/>
            </div>
            <div className="cdd_main">

              <div className="cdd_left">
                <div className="cdd_up">
                  <div className="cdd_up_title">
                    <span style={Blue}> ROBOWARS</span>
                  </div>
                </div>
              <div className="cdd_down">
                  <div className="cdd_down_para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto exercitationem, iusto officiis dolor sequi et neque eius perferendis natus, cumque est rerum, repellendus explicabo aperiam ducimus! Quibusdam laborum impedit ad recusandae laboriosam deserunt, odit nihil porro tempore veritatis, asperiores sapiente et totam soluta quae voluptatum facere consectetur corporis neque quis.
                  </div>
                  <div class="btn-box">
                          <a href="#" class="btn">Participate</a>
                          
                  </div>
                
              </div>
              </div>
              <div className="cdd_right">
                  <img src={robo1} alt="" />
              </div>
              </div>
          </div>
        </div>
      </div>
      <span className="vl"></span>
      <div className='clubpages_right'>
          <div className="clubpages_right_title">
          <h4>
              <span style={Red}>CLUB</span>
              {/* <span> AND</span> */}
              <span style={Blue}> MEMBERS</span>
            </h4>
          </div>
          <div className="cpr_main">
              <Team/>
          </div>
      </div>
        

      </div>
    </div>
  )
}

export default Indiviual_page