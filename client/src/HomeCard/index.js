import React from 'react';

const HomeCard = (props) => {
    return (
        <div className="home_card">
            <img className="home_card_img" src={props.img} alt={props.name}/>
            <h2>{props.name}</h2>
        </div>
    )
}

export default HomeCard;