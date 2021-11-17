import React, { useState } from 'react'
import Modal from "../Modal";

import { Wrapper, Card, Title, Button, Image, ModalImage, ModalTitle, ModalDescription } from './Products.styles'

const Products = ({ product, onAdd }) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <Wrapper>
        <Card>
        <Image src={product.image} alt={product.name} onClick={() => setOpen((isOpen) => !isOpen)}/>
        <Title>{product.name} | Price: ${product.price}</Title>
        <Button onClick={() => onAdd(product)}>Add To Cart</Button>
        </Card>
        <Modal isOpen={isOpen} close={() => setOpen(false)}> 
            <ModalImage src={product.image} alt={product.name}/>
            <ModalTitle>{product.name}</ModalTitle>
            <ModalTitle>Price: ${product.price}</ModalTitle>
            <ModalDescription>{product.description}</ModalDescription>    
        </Modal>
        </Wrapper>
    )
}

export default Products;