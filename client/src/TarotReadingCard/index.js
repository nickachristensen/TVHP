import React, { useState, useRef } from 'react'
import emailjs from 'emailjs-com';
import Modal from "../Modal";

import CardBackImg from '../img/tarotback.jpg'

//Styles
import { Wrapper, Card, CardImg, CardTitle } from "./TarotReadingCard.styles";

const TarotReadingCard = () => {
    const [isOpen, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        description: '',
      });


    function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      }

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_4y7tc4j', 'template_tq5o7s6', form.current, 'user_N5u7K1vJl8lp6ZnSpwHm1')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };


    return (
        <Wrapper>
        <Card className="tarot_reading_card">
            <CardImg onClick={() => setOpen((isOpen) => !isOpen)} className="tarot_reading_card_img" src={CardBackImg} alt='Commisions'/>     
        </Card>
        <CardTitle>Tarot Reading</CardTitle>
        <Modal isOpen={isOpen} close={() => setOpen(false)}> 
                <h1>Tarot Reading</h1>
                <p>If you're insterested in having me read cards at an event or in private please fill out and submit this form!</p>
                <form ref={form} onSubmit={sendEmail}>
                    <label for="fname">First name: </label>
                    <input type="text" id="fname" name="fname" defaultValue="Jane" onChange={handleChange}></input>
                    <label for="lname">Last name: </label>
                    <input type="text" id="lname" name="lname" defaultValue="Doe" onChange={handleChange}></input>
                    <label for="email">Email: </label>
                    <input type="text" id="email" name="email" defaultValue="janedoe@gmail.com" onChange={handleChange}></input>
                    <label for="description">Description: </label>
                    <textarea id="description" name="description" defaultValue="Type descrition of tarot event here!" rows="5" cols="40" onChange={handleChange}></textarea>
                    <input type="submit" value="Submit"></input>
                </form>      
        </Modal>
        </Wrapper>
    )
}

export default TarotReadingCard;