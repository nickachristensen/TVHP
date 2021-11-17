import React from 'react'
import { Link } from "react-router-dom"
import HomeCard from '../HomeCard'
import CommisionCard from '../CommisionCard'
import TarotReadingCard from '../TarotReadingCard'
import AboutMeCard from '../AboutMeCard'   

import BackgroundImg from '../img/IMG_2227.JPG'
import CardBackImg from '../img/tarotback.jpg'
import CardFlip from '../img/RWS_Tarot_03_Empress.jpg'

//Style
import { Wrapper } from "./Home.styles";

const Home = () => {
  
    return (
        <Wrapper img={BackgroundImg}>
            <Link to='/gallery'> 
                <HomeCard  name="Gallery"/> 
            </Link>
            <Link to='/shop'> 
                <HomeCard  name="Shop"/> 
            </Link>
            <CommisionCard />
        <TarotReadingCard />
        <AboutMeCard />
        </Wrapper>
    )
    }

export default Home