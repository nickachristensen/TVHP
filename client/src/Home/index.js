import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import CommissionCard from '../CommissionCard'
import TarotReadingCard from '../TarotReadingCard'
import AboutMeCard from '../AboutMeCard' 
import GalleryCard from '../GalleryCard'  
import ShopCard from '../ShopCard'
import Modal from "../Modal";

import BackgroundImg from '../img/IMG_2227.JPG'

//Style
import { Wrapper, Welcome } from "./Home.styles";

const Home = () => {
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        const popupModalValue = localStorage.getItem("popupModal")
        if (!popupModalValue) {
          const timer = setTimeout(() => {
            setOpen(true);
            localStorage.setItem("popupModal", "1");
          }, 2000);
      
          return () => clearTimeout(timer);
        }
      }, []);
  
    return (
        <Wrapper img={BackgroundImg}>
            <Link to='/gallery' style={{ textDecoration: 'none' }}> 
                <GalleryCard  name="Gallery"/> 
            </Link>
            <Link to='/shop' style={{ textDecoration: 'none' }}> 
                <ShopCard  name="Shop"/> 
            </Link>
            <CommissionCard />
        <TarotReadingCard />
        <AboutMeCard />
        <Modal isOpen={isOpen} close={() => setOpen(false)}>
            <Welcome>
                <h1>Welcome To The Very High Priestess's Webstore & Gallery!</h1> 
                <p>Hover over the tarot cards and let them guide your way.  If you ever find yourself lost you can click the logo in the upper left or the home button in the upper right!  I hope you enjoy your stay!</p>
                <p>- Anna</p>
            </Welcome>  
        </Modal>
        </Wrapper>
    )
    }

export default Home