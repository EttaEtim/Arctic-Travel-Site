import React from 'react';



function TopBanner() {
  return (
    <div className='first--div'>
        <navbar>
            <ul className='nav--list'>
                <li className='nav--item'><img src={require("../images/arcticlogo.png")} alt='logo'/></li>
                <li className='nav--item'>About Us</li>
                <li className='nav--item'>Support</li>
                <li className='nav--item'>Language</li>
                <li className='nav--item'><button className='btn--primary'>Sign In</button></li>

            </ul>
        </navbar>   
            <div className='banner--text'>
                <h1 className='main--text'>Plan The Perfect Winter Trip</h1>

                <p className='paragraph--text'>Easily plan your ideal ski trip from home with the <br /> help of professionals</p>

                <button className='btn--secondary'>Book Here</button>
            </div>
    </div>
  )
}

export default TopBanner