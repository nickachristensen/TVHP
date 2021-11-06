import React from 'react'

import { Image } from './ArtCard.styles'

const ArtCard = ({ art }) => {

const { name, image, description } = art

    return (

        <Image src={image} alt={name}/>

    )                          
}

export default ArtCard;