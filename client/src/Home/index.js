import React from 'react'
import { Link } from "react-router-dom"
import CommisionCard from '../CommisionCard'
import TarotReadingCard from '../TarotReadingCard'
import AboutMeCard from '../AboutMeCard' 
import GalleryCard from '../GalleryCard'  
import ShopCard from '../ShopCard'

import BackgroundImg from '../img/IMG_2227.JPG'

//Style
import { Wrapper } from "./Home.styles";

const Home = () => {
  
    return (
        <Wrapper img={BackgroundImg}>
            <Link to='/gallery' style={{ textDecoration: 'none' }}> 
                <GalleryCard  name="Gallery"/> 
            </Link>
            <Link to='/shop' style={{ textDecoration: 'none' }}> 
                <ShopCard  name="Shop"/> 
            </Link>
            <CommisionCard />
        <TarotReadingCard />
        <AboutMeCard />
        </Wrapper>
    )
    }

export default Home