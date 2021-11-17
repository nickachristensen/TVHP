import React, { useState } from 'react'
import Modal from "../Modal";

import CardBackImg from '../img/tarotback.jpg'

//Styles
import { Wrapper, Card, CardImg, CardTitle } from "./AboutMeCard.styles";

const AboutMeCard = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <Wrapper>
        <Card className="about_me_card">
            <CardImg onClick={() => setOpen((isOpen) => !isOpen)} className="about_me_card_img" src={CardBackImg} alt='Commisions'/>     
        </Card>
        <CardTitle>About Me</CardTitle>
        <Modal isOpen={isOpen} close={() => setOpen(false)}> 
                <h1>About Me</h1>
                <p>Hi I'm Anna!</p>
        </Modal>
        </Wrapper>
    )
}

export default AboutMeCard;