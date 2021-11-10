import React from 'react';
import { HeaderLogo, Title, Wrapper } from './Header.styles';
import Logo from "../img/IMG_0238.jpg"

const Header = ({ countCartItems }) => {
    
    return (
        <Wrapper> 
            <HeaderLogo src={Logo} alt="logo"/> 
            <Title>
                The Very High Priestess   
            </Title>
            <div>
                Cart { ' '}
                {countCartItems ? (
                    <button>{countCartItems}</button>
                ) : (
                    ' '
                )}
            </div>
        </Wrapper>
    );
    }

export default Header;