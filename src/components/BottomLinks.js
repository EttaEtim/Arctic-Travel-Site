import React from 'react'

function BottomLinks() {
  return (
    <div className='bottom--wrapper'>
        <div className='lhs'>        
            <img src={require("../images/plane.png")} alt='logo'/>
            <h3>Artic Travels</h3>
            <p className='blinkpara'>Book your trip in minutes, get full<br />control for much longer.</p>

            <span className='logo1'><img src={require("../images/facebook.png")} alt='logo'/></span>
            <span className='logo2'><img src={require("../images/instagram.png")} alt='logo'/></span>
            <span className='logo3'><img src={require("../images/twitter.png")} alt='logo'/></span>
       
        </div>

        <div className='rhs'>

            <span className='blue--links'>COMPANY</span>
            <span className='blue--links'>CONTACT</span>
            <span className='blue--links'>MORE</span>
        <div>
            
            <br />
        <div>
            <span className='other--links1'>About</span>
            <span className='other--links1b'>FAQs</span>
            <span className='other--links1c'>Airlines</span>
        </div>
            
            <br />
        <div>
            <span className='other--links2'>Careers</span>
            <span className='other--links2b'>Press</span>
            <span className='other--links2c'>AirFees</span>
        </div>

             
            <br />
        <div>
            <span className='other--links3'>Mobile</span>
            <span className='other--links3b'>Affiliates</span>
            <span className='other--links3c'>Lowfare Tips</span>
        </div>
        
        </div>


        </div>

    </div>
  )
}

export default BottomLinks