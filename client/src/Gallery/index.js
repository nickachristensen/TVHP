import React, { useEffect, useState } from 'react';
import ArtCard from '../ArtCard';

const Gallery = () => {

const [art, setArt] = useState([])

useEffect(() => {
    fetch('http://localhost:3000/art')
    .then(resp => resp.json())
    .then(data => setArt(data))
}, [])


const artCards = art.map(item => 
    <ArtCard key={item.id} art={item}/>)

    return (
        <div>
        {artCards}
        </div>
    );
    }

export default Gallery;