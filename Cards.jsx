import React  from "react";

function Card(props){
    return(
    <>
    <div className="card">
      <img src={props.imgsrc} alt="movie" className="card-img" />
      <div className="card-info">
        <span className="card-category">{props.catg}</span>
        <h3 className="card-title">{props.sname}</h3>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <button className="btn-watch-now">Watch Now</button>
        </a>
      </div>
    </div>
    </>
    )
};

export default Card;