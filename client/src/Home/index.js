import React from 'react'
import { Link } from "react-router-dom"
import HomeCard from '../HomeCard'


//Style
import { Wrapper } from "./Home.styles";

const Home = () => {
    return (
        <Wrapper>
       <Link to='/gallery'> <HomeCard img="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/John_William_Waterhouse_-_Magic_Circle.JPG/250px-John_William_Waterhouse_-_Magic_Circle.JPG" name="Gallery"/> </Link>
        <HomeCard img="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/John_William_Waterhouse_-_Magic_Circle.JPG/250px-John_William_Waterhouse_-_Magic_Circle.JPG" name="Shop"/>
        <HomeCard img="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/John_William_Waterhouse_-_Magic_Circle.JPG/250px-John_William_Waterhouse_-_Magic_Circle.JPG" name="Commisions"/>
        <HomeCard img="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/John_William_Waterhouse_-_Magic_Circle.JPG/250px-John_William_Waterhouse_-_Magic_Circle.JPG" name="Tarot Readings"/>
        <HomeCard img="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/John_William_Waterhouse_-_Magic_Circle.JPG/250px-John_William_Waterhouse_-_Magic_Circle.JPG" name="About Me"/>
        </Wrapper>
    )
    }

export default Home