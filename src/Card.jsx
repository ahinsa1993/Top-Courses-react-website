import React from 'react'

const Card = (props) => {
  return(
    <>
      <div className='cards'>
        <div className='card'>
          <img src={props.src} alt="myPic" className='card_img'/>
          <div className='card_info'>
            <span className='card_category'>{props.name}</span>
            <h3 className='card_title'>{props.title}</h3>
            <a href={props.link} target="_blank">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card;