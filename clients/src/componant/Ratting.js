import React from 'react'

const Ratting = ({rating,text}) => {
    return (
        <>
        <div className="div">
          <span style={{color:'gold', fontSize:26 ,marginLeft:3}}>
          <i className={rating >=1? "fas fa-star":rating>=0.5? "fas fa-star-half-alt":""}></i>
          </span>
          <span style={{color:'gold', fontSize:26 ,marginLeft:3}}>
          <i className={rating >=2? "fas fa-star":rating>=1.5? "fas fa-star-half-alt":""}></i>
          </span>
          <span style={{color:'gold', fontSize:26 ,marginLeft:3}}>
          <i className={rating >= 3? "fas fa-star":rating>=2.5? "fas fa-star-half-alt":""}></i>
          </span>

          <span style={{color:'gold', fontSize:26 ,marginLeft:3}}>
          <i className={rating >=4? "fas fa-star":rating>=3.5? "fas fa-star-half-alt":""}></i>
          </span>
          <span style={{color:'gold', fontSize:26 ,marginLeft:3}}>
          <i className={rating >=5? "fas fa-star":rating>=4.5? "fas fa-star-half-alt":""}></i>
          </span>
 <span>{text && text}</span>
        </div>
        </>
    )
}

export default Ratting
