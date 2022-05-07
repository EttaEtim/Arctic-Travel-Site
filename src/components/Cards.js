import React from 'react'

function Cards() {
  return (
    <div className='cards--wrapper'>
            <div className='left--div'>
                <h1 className='card--text'>The best resorts to chill <br /> and relax</h1>
                <img className='card1' src={require("../images/pic7.png")} alt='beach'/>
                <img className='card2' src={require("../images/pic6.png")} alt='boat'/>
            </div>
                
            <div className='right--div'>
                <img className='card3' src={require("../images/pic2.png")} alt='chalet'/>
                <img className='card4' src={require("../images/pic5.png")} alt='skirider'/>
            </div>
    </div>
  )
}

export default Cards