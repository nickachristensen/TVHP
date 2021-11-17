import React, { useState, useRef } from 'react'
import emailjs from 'emailjs-com';
import Modal from "../Modal";

import CardBack from '../img/tarotback.jpg'
import CardFlip from '../img/Wands01.jpg'

//Styles
import { Wrapper, Content, Card, CardImg, CardBackImg, CardTitle } from "./CommissionCard.styles";

const CommissionCard = () => {
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
    
        emailjs.sendForm('service_4y7tc4j', 'template_rqbynno', form.current, 'user_N5u7K1vJl8lp6ZnSpwHm1')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });setOpen(false);alert('Your email about your commission has been sent!');
      };

    return (
        <Wrapper>
        <Card className="commision_card">
            <CardImg className="commision_card_img" img={CardBack}></CardImg>     
            <CardBackImg onClick={() => setOpen((isOpen) => !isOpen)} className="home_card_back_img" img={CardFlip}><CardTitle>Commissions</CardTitle></CardBackImg>
        </Card>
        <Modal isOpen={isOpen} close={() => setOpen(false)}>
            <Content> 
                <h1>Commissions</h1>
                <p>If insterested in a commission please fill out and submit this form!</p>
                <form ref={form} onSubmit={sendEmail}>
                    <label for="fname">First name: </label>
                    <input type="text" id="fname" name="fname" defaultValue="Jane" onChange={handleChange}></input>
                    <label for="lname">Last name: </label>
                    <input type="text" id="lname" name="lname" defaultValue="Doe" onChange={handleChange}></input>
                    <label for="email">Email: </label>
                    <input type="text" id="email" name="email" defaultValue="janedoe@gmail.com" onChange={handleChange}></input>
                    <label for="description">Description: </label>
                    <textarea id="description" name="description" defaultValue="Type descrition of commision here!" rows="5" cols="40" onChange={handleChange}></textarea>
                    <input type="submit" value="Submit"></input>
                </form>
              </Content>      
        </Modal>
        </Wrapper>
    )
}

export default CommissionCard;