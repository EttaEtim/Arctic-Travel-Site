import React from 'react'

function Sponsors() {
  return (
    <div>
         <ul className='sponsors'>
                <li className='wrapper--items'><img src={require("../images/Group.png")} alt='logo'/></li>
                <li className='wrapper--items'><img src={require("../images/apple.png")} alt='logo'/></li>
                <li className='wrapper--items'><img src={require("../images/star.png")} alt='logo'/></li>
                <li className='wrapper--items'><img src={require("../images/intrax.png")} alt='logo'/></li>
                <li className='wrapper--items'><img src={require("../images/master.png")} alt='logo'/></li>

            </ul>

    </div>
  )
}

export default Sponsors