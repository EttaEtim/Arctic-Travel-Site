import React from 'react'

function Resorts() {
  return (
    <div className='resort--holder'>
        <img className='resort' src={require("../images/mountain-resort.png")} alt='arrow'/>
        <img className='resort' src={require("../images/fuji-mountain.png")} alt='arrow'/>
        <img className='resort' src={require("../images/freezing-waterlake.png")} alt='arrow'/>
    </div>
  )
}

export default Resorts