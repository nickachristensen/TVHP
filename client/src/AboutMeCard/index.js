import React, { useState } from 'react'
import Modal from "../Modal";

import CardBack from '../img/tarotback.jpg'
import CardFlip from '../img/RWS_Tarot_19_Sun.jpg'

//Styles
import { Wrapper, Content, Card, CardImg, CardBackImg, CardTitle } from "./AboutMeCard.styles";

const AboutMeCard = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <Wrapper>
        <Card className="about_me_card">
            <CardImg className="about_me_card_img" img={CardBack}></CardImg>  
            <CardBackImg onClick={() => setOpen((isOpen) => !isOpen)} className="home_card_back_img" img={CardFlip}><CardTitle>About Me</CardTitle></CardBackImg>   
        </Card>
        <Modal isOpen={isOpen} close={() => setOpen(false)}> 
            <Content>
                <h1>About Me</h1>
                <p>Hi I'm Anna!</p>
            </Content>
        </Modal>
        </Wrapper>
    )
}

export default AboutMeCard;