import React from 'react'

function SecondSection() {
  return (
      
    <div className='wrapper'>
            <ul className='wrapper--list'>
                <li className='wrapper--items'><img src={require("../images/location.png")} alt='logo'/></li>
                <li className='wrapper--items'><img src={require("../images/persons.png")} alt='logo'/></li>
                <li className='wrapper--items'><img src={require("../images/checkin.png")} alt='logo'/></li>
                <li className='wrapper--items'><img src={require("../images/checkout.png")} alt='logo'/></li>
                <li className='wrapper--items'><button className='btn--secondary2'>Book Trip</button></li>

            </ul>
    </div>
   

  )
}

export default SecondSection