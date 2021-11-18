import React from 'react';
import { Link } from 'react-router-dom'
import { HeaderLogo, HomeLogo, CartLogo, InstaLogo, LinkWrap, Title, Wrapper } from './Header.styles';
import Logo from "../img/IMG_2226.PNG"
import Background from "../img/headerbg.jpg"
import HomeLogoImg from "../img/homeicon.png"
import CartLogoImg from "../img/cart.png"
import InstaLogoImg from "../img/instalogo.png"


const Header = ({ countCartItems }) => {
    
    return (
        <Wrapper img= {Background}> 
            <LinkWrap>
            <Link to= '/'>
            <HeaderLogo src={Logo} alt="logo"/> 
            </Link>
            </LinkWrap>
            <Title>
                The Very High Priestess   
            </Title>
            <Link to= '/'>
            <HomeLogo src={HomeLogoImg} alt="homebackground"/>
            </Link>
            <div>
            <Link to= '/shop'>
                <CartLogo src={CartLogoImg} alt="Shop"/>
            </Link> 
            { ' '}
                {countCartItems ? (
                    <button>{countCartItems}</button>
                ) : (
                    ' '
                )}
            </div>
            <a href='https://www.instagram.com/annavanglamazon/'>
            <InstaLogo src={InstaLogoImg} alt="instagram"/>
            </a>
        </Wrapper>
    );
    }

export default Header;