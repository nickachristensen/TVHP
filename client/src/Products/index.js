import React, { useState } from 'react'
import Modal from "../Modal";

import { Image, ModalImage, ModalTitle, ModalDescription } from './Products.styles'

const Products = ({ product, onAdd }) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
        <Image src={product.image} alt={product.name} onClick={() => setOpen((isOpen) => !isOpen)}/>
        <h4>{product.name} | Price: ${product.price}</h4>
        <div>
            <button onClick={() => onAdd(product)}>Add To Cart</button>
        </div>
        <Modal isOpen={isOpen} close={() => setOpen(false)}> 
            <ModalImage src={product.image} alt={product.name}/>
            <ModalTitle>{product.name}</ModalTitle>
            <ModalTitle>Price: ${product.price}</ModalTitle>
            <ModalDescription>{product.description}</ModalDescription>    
        </Modal>
        </>
    )
}

export default Products;