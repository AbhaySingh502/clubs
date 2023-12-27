import React from 'react'
import clubdata from '../data/clubdata'
import Club from './Club'
import Header from '../components/Header'
function Clubs_card() {
  return (
    <div className='clubs_card'>
      <Header/>
        {clubdata.map((item,index) => {
            return(
                <Club {...item}/>
            )
        })}
    </div>
  )
}

export default Clubs_card