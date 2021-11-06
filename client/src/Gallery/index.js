import React, { useEffect, useState } from 'react';
import ArtCard from '../ArtCard';

import { Wrapper } from './Gallery.styles';

const Gallery = () => {
const [art, setArt] = useState([])

useEffect(() => {
    fetch('/gallery/')
    .then(resp => resp.json())
    .then(data => setArt(data))
}, [])


const artCards = art.map(art => 
    <ArtCard key={art.id} art={art}/>)

    return (
        <Wrapper>
        {artCards}
        </Wrapper>
    );
    }

export default Gallery;