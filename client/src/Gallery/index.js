import React, { useEffect, useState } from 'react';
import ArtCard from '../ArtCard';

import BackgroundImg from '../img/IMG_2227.JPG'

import { Wrapper } from './Gallery.styles';

const Gallery = () => {
const [art, setArt] = useState([]);

useEffect(() => {
    fetch('/../arts/')
    .then(resp => resp.json())
    .then(data => setArt(data))
}, [])

const artCards = art.map(art => 
    <ArtCard key={art.id} art={art}/>)

    return (
 
        <Wrapper img={BackgroundImg}>
        {artCards}
        </Wrapper>

    );
    }

export default Gallery;