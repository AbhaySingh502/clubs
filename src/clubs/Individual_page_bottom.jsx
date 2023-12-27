import React from 'react'
import '../css/Indiviual.css'
const Blue = {
    color: "#003f87",
  };
function Individual_page_bottom({key,name,para,source_url}) {
  return (
    <div className="cdd_main">
              <div className="cdd_left">
                <div className="cdd_up">
                  <div className="cdd_up_title">
                    <span style={Blue}>{name}</span>
                  </div>
                </div>
              <div className="cdd_down">
                  <div className="cdd_down_para">
                    {para}
                  </div>
                  {/* <div class="btn-box">
                          <a href="#" class="btn">Participate</a>
                          
                  </div> */}
                
              </div>
              </div>
              <div className="cdd_right">
                  <img src={source_url} alt="" />
              </div>
    </div>
  )
}

export default Individual_page_bottom