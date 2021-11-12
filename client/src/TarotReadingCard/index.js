import React, { useState } from 'react'
import Modal from "../Modal";

//Styles
import { Wrapper, Card, CardImg, CardTitle } from "./TarotReadingCard.styles";

const TarotReadingCard = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <Wrapper>
        <Card className="tarot_reading_card">
            <CardImg onClick={() => setOpen((isOpen) => !isOpen)} className="tarot_reading_card_img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/John_William_Waterhouse_-_Magic_Circle.JPG/250px-John_William_Waterhouse_-_Magic_Circle.JPG" alt='Commisions'/>     
        </Card>
        <CardTitle>Tarot Reading</CardTitle>
        <Modal isOpen={isOpen} close={() => setOpen(false)}> 
                <h1>Tarot Reading</h1>
                <p>If you're insterested in having me read cards at an event or in private please fill out and submit this form!</p>
        </Modal>
        </Wrapper>
    )
}

export default TarotReadingCard;