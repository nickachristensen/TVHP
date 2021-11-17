import React from 'react';

import CardBack from '../img/tarotback.jpg'
import CardFlip from '../img/Pents06.jpg'

//Styles
import { Wrapper, Card, CardImg, CardBackImg, CardTitle } from "./ShopCard.styles";

const ShopCard = (props) => {
    return (
        <Wrapper>
        <Card className="home_card">
            <CardImg className="home_card_img" img={CardBack}></CardImg>
            <CardBackImg className="home_card_back_img" img={CardFlip}><CardTitle>{props.name}</CardTitle></CardBackImg>     
        </Card>
        </Wrapper>
    )
}

export default ShopCard;