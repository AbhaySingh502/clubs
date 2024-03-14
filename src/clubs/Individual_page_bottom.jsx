import React from 'react'
import '../css/Indiviual.css'
const Blue = {
  borderBottom: '0.2rem solid #415695',
  color: "#003f87",
};
function Individual_page_bottom({ key, name, para, source_url }) {
  return (
    <div className="cdd_main mb-0.2 d-flex">
      <div className="cdd_left">
        <div className="cdd_up">
          <div className="cdd_up_title text-start font-weight500" style={{ marginLeft: "2.3rem  " }}>
            <span style={Blue}>{name}</span>
          </div>
        </div>
        <div className="d-flex flex-column">
          <div className="cdd_down_para text-justify">
            {para}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Individual_page_bottom