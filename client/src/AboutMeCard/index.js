import React, { useState } from 'react'
import Modal from "../Modal";

import CardBack from '../img/tarotback.jpg'
import CardFlip from '../img/RWS_Tarot_19_Sun.jpg'
import AboutMe from '../img/aboutme.JPG'

//Styles
import { Wrapper, Content, Card, CardImg, CardBackImg, CardTitle, Title, P, AboutMeImg } from "./AboutMeCard.styles";

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
                <Title>About Me</Title>
                <AboutMeImg src={AboutMe}/>
                <P>Columbus native Anna VanWalsen is a traditional painter, illustrator, and fourth generation tarot card reader.  Her work uses street art aestetics to explore political as well mystic and occult subject matters.</P>  
            </Content>
        </Modal>
        </Wrapper>
    )
}

export default AboutMeCard;