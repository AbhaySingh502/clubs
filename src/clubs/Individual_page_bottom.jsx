import React from 'react'
import '../css/Indiviual.css'
const Blue = {
    color: "#003f87",
  };
function Individual_page_bottom({key,name,para,source_url}) {
  return (
    <div className="cdd_main mb-0.2 d-flex">
              <div className="cdd_left w-75">
                <div className="cdd_up">
                  <div className="cdd_up_title text-center font-weight500">
                    <span style={Blue}>{name}</span>
                  </div>
                </div>
              <div className="cdd_down d-flex flex-column align-items-center">
                  <div className="cdd_down_para text-justify">
                    {para}
                  </div>
                  {/* <div class="btn-box">
                          <a href="#" class="btn">Participate</a>
                          
                  </div> */}
                
              </div>
              </div>
              <div className="cdd_right w-25 mr-0.8">
                  <img src={source_url} alt="" />
              </div>
    </div>
  )
}

export default Individual_page_bottom