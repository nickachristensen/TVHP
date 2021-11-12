import React from 'react'
import { Link } from "react-router-dom"
import HomeCard from '../HomeCard'
import CommisionCard from '../CommisionCard'
import TarotReadingCard from '../TarotReadingCard'
import AboutMeCard from '../AboutMeCard'   


//Style
import { Wrapper } from "./Home.styles";

const Home = () => {

    const Cardimg = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/John_William_Waterhouse_-_Magic_Circle.JPG/250px-John_William_Waterhouse_-_Magic_Circle.JPG"

    return (
        <Wrapper>
            <Link to='/gallery'> 
                <HomeCard img= {Cardimg} name="Gallery"/> 
            </Link>
            <Link to='/shop'> 
                <HomeCard img={Cardimg} name="Shop"/> 
            </Link>
            <CommisionCard />
        <TarotReadingCard />
        <AboutMeCard />
        </Wrapper>
    )
    }

export default Home