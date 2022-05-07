import React from 'react'

function TextArea() {
  return (
    <div className='text--area'>
        <h2 className='big--text'>Creating the best <span className='cold'>ice-cold!</span> experience <br /> you would never forget.</h2>

        <p className='paragraph--area'>Would you explore nature paradise in the world, find the <br />  best destination in the world with us.</p>
    
        <h2 className='big--text2'>View Regions available</h2>

        <img className='arrow' src={require("../images/Arrow.png")} alt='arrow'/>
    </div>
  )
}

export default TextArea
