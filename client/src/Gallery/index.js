import React, { useEffect, useState } from 'react';
import ArtCard from '../ArtCard';
import SortArt from '../SortArt';

import BackgroundImg from '../img/IMG_2227.JPG'

import { Wrapper, GalleryCards, GalleryButtons } from './Gallery.styles';

const Gallery = () => {
const [art, setArt] = useState([]);
const [filterCategory, setFilterCategory] =useState("All Works")

useEffect(() => {
    fetch('/../arts/')
    .then(resp => resp.json())
    .then(data => setArt(data))
}, [])

function handleCategory(e) {
    setFilterCategory(e.target.name)
}

const filteredArt = art.filter(item => filterCategory === "All Works" ? true : item.category === filterCategory)

const artCards = filteredArt.map(art => 
    <ArtCard key={art.id} art={art}/>)

    return (
 
        <Wrapper img={BackgroundImg}>
        <GalleryButtons>
        <SortArt handleCategory={handleCategory} filterCategory={filterCategory} art={art}/>
        </GalleryButtons>
        <GalleryCards>{artCards}</GalleryCards>
        </Wrapper>

    );
    }

export default Gallery;