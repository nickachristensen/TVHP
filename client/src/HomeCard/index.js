import React from 'react';

//Styles
import { Wrapper, Card, CardImg, CardTitle } from "./HomeCard.styles";

const HomeCard = (props) => {
    return (
        <div>
        <Card className="home_card">
            <CardImg className="home_card_img" src={props.img} alt={props.name}/>     
        </Card>
        <CardTitle>{props.name}</CardTitle>
        </div>
    )
}

export default HomeCard;