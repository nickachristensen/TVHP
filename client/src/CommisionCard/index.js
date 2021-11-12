import React, { useState } from 'react'
import Modal from "../Modal";

//Styles
import { Wrapper, Card, CardImg, CardTitle } from "./CommisionCard.styles";

const CommisionCard = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <Wrapper>
        <Card className="commision_card">
            <CardImg onClick={() => setOpen((isOpen) => !isOpen)} className="commision_card_img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/John_William_Waterhouse_-_Magic_Circle.JPG/250px-John_William_Waterhouse_-_Magic_Circle.JPG" alt='Commisions'/>     
        </Card>
        <CardTitle>Commisions</CardTitle>
        <Modal isOpen={isOpen} close={() => setOpen(false)}> 
                <h1>Commisions</h1>
                <p>If insterested in a commision please fill out and submit this form!</p>
        </Modal>
        </Wrapper>
    )
}

export default CommisionCard;