import React, { useState } from 'react'
import { Link } from "react-router-dom"
import HomeCard from '../HomeCard'
import Modal from "../Modal";


//Style
import { Wrapper } from "./Home.styles";

const Home = () => {
    const [isOpen, setOpen] = useState(false);

    const Cardimg = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/John_William_Waterhouse_-_Magic_Circle.JPG/250px-John_William_Waterhouse_-_Magic_Circle.JPG"

    return (
        <Wrapper>
            <Link to='/gallery'> 
                <HomeCard img= {Cardimg} name="Gallery"/> 
            </Link>
            <Link to='/shop'> 
                <HomeCard img={Cardimg} name="Shop"/> 
            </Link>
            <HomeCard img={Cardimg} name="Commisions" onClick={() => setOpen((isOpen) => !isOpen)}/>
            <Modal isOpen={isOpen} close={() => setOpen(false)}> 
                <h1>Hello</h1>
            </Modal>
        <HomeCard img={Cardimg} name="Tarot Readings"/>
        <HomeCard img={Cardimg} name="About Me"/>
        </Wrapper>
    )
    }

export default Home